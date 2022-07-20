<script>
import BaseTweet from '@/components/tweet/base-tweet.vue'
import BaseText from '@/components/base-text.vue'

export default {
   name: 'TweetsView',
   components: {
      BaseTweet,
      BaseText,
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
   BaseText(size="fs-large" weight="fw-bold" class="text" v-if="!tweets.length") {{this.$route.params.handle == this.$store.state.loggedUser.handle ? 'You don’t have any tweets yet' : "Hasn't tweeted yet"}}

   div(v-for="(tweet,index) in tweets" key="index" v-else)
      BaseTweet(  
         :id="tweet._id"         
         :author="tweet.author"
         :createdAt="tweet.createdAt"
         :content="tweet.content"
         :attachment="tweet.attachment"
         :replies="tweet.replies.length"
         :retweets="tweet.retweets.length"
         :likes="tweet.likes.length"
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
