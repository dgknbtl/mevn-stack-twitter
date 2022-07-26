<script>
import BaseHeading from '@/components/base-heading'
import BaseText from '@/components/base-text'
import NewTweet from '@/components/tweet/new-tweet'
import BaseTweet from '@/components/tweet/base-tweet'
import {mapState, mapActions} from 'vuex'
import {sortByDate} from '../../helper/functions'

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
      ...mapState({
         searchedUser: (state) => state.searchedUser,
      }),
      allTweets() {
         if (!this.searchedUser) return
         const user = this.searchedUser?.following.map((user) => user)
         let tweets = []
         for (let x in user) {
            tweets.push(...user[x].tweets)
         }
         return tweets
            ? [...tweets, ...this.searchedUser?.tweets].sort(sortByDate)
            : [...this.searchedUser?.tweets].sort(sortByDate)
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
   BaseHeading(title="Latest Tweets" icon="star")

   NewTweet
   
   BaseText(size="fs-large" weight="fw-bold" class="text" v-if="!allTweets?.length")  You don't follow anyone.

   div(v-for="(tweet,index) in allTweets" v-else) 
      BaseTweet(  
         :id="tweet._id"         
         :author="tweet.originalTweet && !tweet.content ? tweet.originalTweet.author : tweet.author"
         :createdAt="tweet.originalTweet && !tweet.content ? tweet.originalTweet.createdAt : tweet.createdAt"
         :content="tweet.originalTweet && !tweet.content ? tweet.originalTweet.content : tweet.content"
         :attachment="tweet.originalTweet && !tweet.content ? tweet.originalTweet.attachment : tweet.attachment"
         :replies="tweet.originalTweet && !tweet.content ? tweet.originalTweet.replies.length : tweet.replies.length"
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
   width: 100%;
   display: block;
   text-align: center;
   padding: 10px;
}
</style>
