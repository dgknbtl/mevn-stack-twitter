<script>
import BaseHeading from '@/components/base-heading'
import BaseText from '@/components/base-text'
import NewTweet from '@/components/tweet/new-tweet'
import BaseTweet from '@/components/tweet/base-tweet'

export default {
   name: 'HomeView',
   components: {
      BaseHeading,
      BaseText,
      NewTweet,
      BaseTweet,
   },
   data() {
      return {
         exampleData: [
            {
               avatar:
                  'https://pbs.twimg.com/profile_images/1534871110856081410/ihb2cTGs_400x400.jpg',
               author: 'Doğukan Batal',
               handle: 'dogukanbatal',
               creaatedAt: '11h',
               content:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ',
               likes: 5,
               retweet: 100,
               comment: 1,
               media: 'https://pbs.twimg.com/media/FVIJd2oXwAE6ic_?format=jpg&name=medium',
            },
            {
               avatar: undefined,
               author: 'The Economist ',
               handle: 'TheEconomist',
               creaatedAt: '1d',
               content:
                  'At least we’re safe here because Bitcoin has never dipped beneath a previous cycle’s all time high before! Right?',
               likes: 50,
               retweet: 5,
               comment: 3,
               media: null,
            },
            {
               avatar: 'https://pbs.twimg.com/profile_images/72647502/tyler_400x400.jpg',
               author: 'Zero Hedge',
               handle: 'zerohedge',
               creaatedAt: '11h',
               content:
                  'We Are Trading Like It`s A Race Which Central Bank Can Crash Their Economy The Fastest  ',
               likes: 55,
               retweet: 5,
               comment: 10,
               media: 'https://pbs.twimg.com/card_img/1536414470658052102/j1mc7Fmo?format=jpg&name=small',
            },
            {
               avatar: undefined,
               author: 'The Economist ',
               handle: 'TheEconomist',
               creaatedAt: '1d',
               content:
                  'At least we’re safe here because Bitcoin has never dipped beneath a previous cycle’s all time high before! Right?',
               likes: 50,
               retweet: 5,
               comment: 3,
               media: null,
            },
         ],
      }
   },
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
   
   div(v-for="(tweet,index) in exampleData" key="index")
      BaseTweet(:tweetData="tweet")
</template>

<style lang="postcss" scoped></style>
