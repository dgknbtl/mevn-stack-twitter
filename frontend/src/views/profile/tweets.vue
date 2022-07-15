<script>
import BaseTweet from '@/components/tweet/base-tweet.vue'
import BaseText from '@/components/base-text.vue'

export default {
   name: 'TweetsView',
   components: {
      BaseTweet,
      BaseText,
   },
   computed: {
      tweets() {
         return this.$store.state.user.tweets
      },
   },
}
</script>

<template lang="pug">
BaseText(size="fs-large" weight="fw-bold" class="text" v-if="!tweets.length") You don’t have any tweets yet
div(v-for="(tweet,index) in tweets" key="index" v-else)
   BaseTweet(:tweet="tweet")
</template>

<style lang="postcss" scoped>
.text {
   padding: 30px;
   display: flex;
   align-items: center;
   justify-content: center;
}
</style>
