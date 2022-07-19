<script>
import BaseHeading from '@/components/base-heading'
import BaseText from '@/components/base-text'
import NewTweet from '@/components/tweet/new-tweet'
import BaseTweet from '@/components/tweet/base-tweet'
import {mapState, mapActions} from 'vuex'

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
         loggedUserHandle: JSON.parse(localStorage.getItem('loggedUserHandle')),
      }
   },
   computed: {
      ...mapState(['searchedUser', 'loggedUser']),
      loggedUserTweets() {
         return this.loggedUser.tweets
      },
   },
   methods: {
      ...mapActions(['fetchUser']),
      async getUser(handle) {
         try {
            await this.fetchUser(handle)
         } catch (e) {
            this.error = e.response.data.message
         }
      },
   },
   async created() {
      await this.getUser(
         this.$route.params.handle ? this.$route.params.handle : this.loggedUserHandle
      )
   },
}
</script>

<template lang="pug">
div
   BaseHeading(title="Latest Tweets" icon="star" @icon-action="someEvent")
   
   NewTweet
   
   BaseText(size="fs-large" weight="fw-bold" class="text" v-if="!searchedUser?.following.length")  You don't follow anyone.
   
   div(v-for="(user,index) in searchedUser.following" :key="index" v-else)
      div(v-for="(tweet,index) in user?.tweets" key="index" v-if="!tweet")
         BaseTweet(:tweet="tweet")

  
   div(v-for="(tweet,index) in searchedUser?.tweets" key="index"  v-if="!tweet")  
      BaseTweet(:tweet="tweet")
</template>

<style lang="postcss" scoped>
.text {
   width: 100%;
   display: block;
   text-align: center;
   padding: 10px;
}
</style>
