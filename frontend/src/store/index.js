import {createStore} from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL || 'http://localhost:3000'

const Mutations = {
   SET_USER: 'SET_USER',
}

export default createStore({
   state: {
      user: null,
      isLoggedIn: false,
   },
   mutations: {
      [Mutations.SET_USER](state, user) {
         state.user = user
         state.isLoggedIn = user ? true : false
      },
   },
   actions: {
      async fetchSession({commit}) {
         const user = await axios.get('/users/login')
         commit(Mutations.SET_USER, user.data)
         console.log(user)
      },
      async authenticate({commit}, payload) {
         const user = await axios.post('/users/login', payload)
         commit(Mutations.SET_USER, user.data)
      },
      async logout({commit}) {
         await axios.get('/users/logout')
         commit(Mutations.SET_USER, null)
      },
      async register(ctx, payload) {
         return await axios.post('/users/register', payload)
      },
   },
   modules: {},
})
