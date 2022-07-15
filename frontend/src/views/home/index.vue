<script>
import BaseHeading from '@/components/base-heading'
import BaseText from '@/components/base-text'
import NewTweet from '@/components/tweet/new-tweet'
// import BaseTweet from '@/components/tweet/base-tweet'

export default {
   name: 'HomeView',
   components: {
      BaseHeading,
      BaseText,
      NewTweet,
      // BaseTweet,
   },
   data() {},
   methods: {
      someEvent() {
         alert()
      },
   },
}
</script>

<template lang="pug">
div
   BaseHeading(title="Latest Tweets" icon="star" @icon-action="someEvent")
   
   NewTweet
   
   //- div(v-for="(tweet,index) in exampleData" key="index")
   //-    BaseTweet(:tweetData="tweet")
</template>

<style lang="postcss" scoped></style>
