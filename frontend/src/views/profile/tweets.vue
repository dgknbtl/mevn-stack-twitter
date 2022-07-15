<script>
import BaseTweet from '@/components/tweet/base-tweet.vue'
import {mapState} from 'vuex'

export default {
   name: 'TweetsView',
   components: {
      BaseTweet,
   },
   computed: {
      ...mapState(['user']),
   },
}
</script>

<template lang="pug">
div(v-for="(tweet,index) in user.tweets" key="index")
   BaseTweet(:tweet="tweet")
</template>

<style lang="postcss" scoped></style>
