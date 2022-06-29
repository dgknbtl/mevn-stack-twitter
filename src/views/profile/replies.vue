<script>
import BaseTweet from '@/components/tweet/base-tweet.vue'

export default {
   name: 'RepliesView',
   components: {
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
               avatar:
                  'https://pbs.twimg.com/profile_images/1534871110856081410/ihb2cTGs_400x400.jpg',
               author: 'Doğukan Batal',
               handle: 'dogukanbatal',
               creaatedAt: '1D',
               content: 'Lorem ipsum dolor sit amet, consectetur. :D  ',
               likes: 10,
               retweet: 10,
               comment: null,
               media: null,
            },
         ],
      }
   },
}
</script>

<template lang="pug">
div(v-for="(tweet,index) in exampleData" key="index")
   BaseTweet(:tweetData="tweet")
</template>

<style lang="postcss" scoped></style>
