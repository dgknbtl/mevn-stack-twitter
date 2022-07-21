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
         :author="tweet.author"
         :createdAt="tweet.createdAt"
         :content="tweet.content"
         :attachment="tweet.attachment"
         :replies="tweet.replies.length"
         :retweets="tweet.retweets.length"
         :likes="tweet.likes.length")
      
</template>

<style lang="postcss" scoped>
.text {
   padding: 30px;
   display: flex;
   align-items: center;
   justify-content: center;
}
</style>
