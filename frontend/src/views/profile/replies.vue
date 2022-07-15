<script>
import BaseTweet from '@/components/tweet/base-tweet.vue'

export default {
   name: 'RepliesView',
   components: {
      BaseTweet,
   },
   data() {
      return {}
   },
}
</script>

<template lang="pug">
//- div(v-for="(tweet,index) in exampleData" key="index")
//-    BaseTweet(:tweetData="tweet")
</template>

<style lang="postcss" scoped></style>
