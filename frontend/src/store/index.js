import {createStore} from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL || 'http://localhost:3000'
axios.defaults.withCredentials = true

const Mutations = {
   SET_USER: 'SET_USER',
   SET_SEARCHED_USER: 'SET_SEARCHED_USER',
   NEW_TWEET: 'NEW_TWEET',
   REMOVE_TWEET: 'REMOVE_TWEET',
   UPDATE_TWEET_MODAL_STATE: 'UPDATE_TWEET_MODAL_STATE',
}

const initPlugin = (store) => {
   store.dispatch('initialize')
}

export default createStore({
   state: {
      loggedUser: null,
      searchedUser: null,
      isTweetModalOpen: false,
   },
   mutations: {
      [Mutations.SET_USER](state, user) {
         state.loggedUser = user
      },
      [Mutations.SET_SEARCHED_USER](state, user) {
         state.searchedUser = user
      },
      [Mutations.NEW_TWEET](state, tweet) {
         if (state.loggedUser._id != state.searchedUser._id) return
         state.searchedUser.tweets.push(tweet)
      },
      [Mutations.REMOVE_TWEET](state, id) {
         const index = state.searchedUser.tweets.findIndex((t) => t._id == id)
         state.searchedUser.tweets.splice(index, 1)
      },
      [Mutations.UPDATE_TWEET_MODAL_STATE](state) {
         state.isTweetModalOpen = !state.isTweetModalOpen
      },
   },
   getters: {
      getHandle(state) {
         if (!state.loggedUser) {
            return
         }
         return state.loggedUser.handle
      },
   },
   actions: {
      async initialize({dispatch}) {
         // console.log(JSON.parse(localStorage.getItem('isLoggedIn')))
         if (JSON.parse(localStorage.getItem('isLoggedIn'))) {
            await dispatch('fetchSession')
         }
      },

      async fetchSession({commit}) {
         try {
            const user = await axios.get('/users/login')
            if (!user) return
            commit(Mutations.SET_USER, user.data)
            return user
         } catch (e) {
            console.log(e.response.data.message)
         }
      },

      async authenticate({commit}, payload) {
         const user = await axios.post('/users/login', payload)
         if (!user) return
         commit(Mutations.SET_USER, user.data)
         localStorage.setItem('isLoggedIn', JSON.stringify(true))
         localStorage.setItem('loggedUserHandle', JSON.stringify(user.data.handle))
         localStorage.setItem('loggedUserId', JSON.stringify(user.data._id))
      },

      async logout({commit}) {
         await axios.get('/users/logout')
         commit(Mutations.SET_USER, null)
         localStorage.setItem('isLoggedIn', JSON.stringify(false))
         localStorage.setItem('loggedUserHandle', JSON.stringify(null))
         localStorage.setItem('loggedUserId', JSON.stringify(null))
      },

      async register(ctx, payload) {
         return await axios.post('/users/register', payload)
      },

      // follow a user
      async follow(ctx, id) {
         return await axios.get(`/users/${id}/follow`)
      },

      // unfollow a user
      async unfollow(ctx, id) {
         return await axios.get(`/users/${id}/unfollow`)
      },

      // like a tweet
      async like({dispatch}, id) {
         await axios.patch(`/tweets/${id}/like`)
         await dispatch('fetchSession')
      },

      // unlike a tweet
      async unlike({dispatch}, id) {
         await axios.patch(`/tweets/${id}/unlike`)
         await dispatch('fetchSession')
      },
      // fetch a user
      async fetchUser({commit}, handle) {
         const user = await axios.get(`/users/${handle}`)
         if (!user) return
         commit('SET_SEARCHED_USER', user.data)
      },

      // fetch a tweet
      async fetchTweet(ctx, id) {
         const tweet = await axios.get(`/tweets/${id}`)
         if (!tweet) return
         return tweet
      },

      async fetchAllTweets() {
         const tweets = await axios.get('/tweets')
         if (!tweets) return
         // commit(Mutations.SET_ALL_TWEETS, tweets.data)
      },

      // create a new tweet
      async createTweet({commit, dispatch}, tweetContent) {
         const tweet = await axios.post('/tweets/new', {content: tweetContent})
         if (!tweet) return
         commit(Mutations.NEW_TWEET, tweet.data)
         await dispatch('fetchTweet', tweet.data._id)
      },

      // remove a tweet
      async removeTweet({commit}, id) {
         await axios.delete(`/tweets/${id}`)
         commit(Mutations.REMOVE_TWEET, id)
      },
   },
   modules: {},
   plugins: [initPlugin],
})
