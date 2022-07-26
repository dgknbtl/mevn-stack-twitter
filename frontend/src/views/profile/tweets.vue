<script>
import BaseTweet from '@/components/tweet/base-tweet.vue'
import BaseText from '@/components/base-text.vue'
import {sortByDate} from '../../helper/functions'

export default {
   name: 'TweetsView',
   components: {
      BaseTweet,
      BaseText,
   },
   computed: {
      sortedTweets() {
         if (!this.tweets) return
         return [...this.tweets].sort(sortByDate)
      },
   },
   props: {
      tweets: {
         type: Object,
      },
   },
}
</script>

<template lang="pug">
div
   BaseText(size="fs-large" weight="fw-bold" class="text" v-if="!sortedTweets.length") {{this.$route.params.handle == this.$store.state.loggedUser.handle ? 'You don’t have any tweets yet' : "Hasn't tweeted yet"}}

   div(v-for="(tweet,index) in sortedTweets" key="index")
      BaseTweet(  
         :id="tweet._id"         
         :author="tweet.originalTweet && !tweet.content ? tweet.originalTweet.author : tweet.author"
         :createdAt="tweet.originalTweet && !tweet.content ? tweet.originalTweet.createdAt : tweet.createdAt"
         :content="tweet.originalTweet && !tweet.content ? tweet.originalTweet.content : tweet.content"
         :attachment="tweet.originalTweet && !tweet.content ? tweet.originalTweet.attachment : tweet.attachment"
         :replies="tweet.originalTweet && !tweet.content ? tweet.originalTweet.replies.length : tweet.replies.length"
         :retweets="tweet.originalTweet && !tweet.content ? tweet.originalTweet.retweets.length : tweet.retweets.length"
         :likes="tweet.originalTweet && !tweet.content ? tweet.originalTweet.likes.length : tweet.likes.length"      
         :originalTweet='tweet.originalTweet && !tweet.content ? null : tweet.originalTweet'
         :isSimpleRetweet="tweet.originalTweet && !tweet.content"
         :retweetAuthor="tweet.originalTweet && !tweet.content && tweet.author"
         :isLiked="this.$store.state.loggedUser?.likes.some((t) => t._id == tweet._id)")
      
      
</template>

<style lang="postcss" scoped>
.text {
   padding: 30px;
   display: flex;
   align-items: center;
   justify-content: center;
}
</style>
