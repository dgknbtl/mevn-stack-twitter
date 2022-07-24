<script>
import BaseTweet from '@/components/tweet/base-tweet.vue'
import BaseText from '@/components/base-text.vue'

export default {
   name: 'LikesView',
   components: {
      BaseTweet,
      BaseText,
   },
   computed: {
      sortedTweets() {
         return [...this.likes].reverse()
      },
   },
   props: {
      likes: {
         type: Object,
      },
   },
}
</script>

<template lang="pug">
div
   BaseText(size="fs-large" weight="fw-bold" class="text" v-if="!likes.length") @{{this.$route.params.handle}} hasn’t liked any Tweets

   div(v-for="(tweet,index) in sortedTweets" key="index" v-else)
      BaseTweet(  
         :id="tweet.originalTweet && !tweet.content ? tweet.originalTweet._id : tweet._id"         
         :author="tweet.originalTweet && !tweet.content ? tweet.originalTweet.author : tweet.author"
         :createdAt="tweet.originalTweet && !tweet.content ? tweet.originalTweet.createdAt : tweet.createdAt"
         :content="tweet.originalTweet && !tweet.content ? tweet.originalTweet.content : tweet.content"
         :attachment="tweet.originalTweet && !tweet.content ? tweet.originalTweet.attachment : tweet.attachment"
         :replies="tweet.originalTweet && !tweet.content ? tweet.originalTweet.replies.length :tweet.replies.length"
         :retweets="tweet.originalTweet && !tweet.content ? tweet.originalTweet.retweets.length : tweet.retweets.length"
         :likes="tweet.originalTweet && !tweet.content ? tweet.originalTweet.likes.length : tweet.likes.length"      
         :originalTweet='tweet.originalTweet && !tweet.content ? null : tweet.originalTweet'
         :isSimpleRetweet="tweet.originalTweet && !tweet.content"
         :retweetAuthor="tweet.originalTweet && !tweet.content && tweet.author"
         :isLiked="this.$store.state.loggedUser?.likes.some((t) => t._id == tweet._id)"
         v-if="this.$store.state.loggedUser?.following.some((u) => u._id == tweet.author._id) || tweet.author._id == this.$store.state.loggedUser?._id ")
</template>

<style lang="postcss" scoped>
.text {
   padding: 30px;
   display: flex;
   align-items: center;
   justify-content: center;
}
</style>
