import {createStore} from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL || 'http://localhost:3000'
axios.defaults.withCredentials = true

const Mutations = {
   SET_USER: 'SET_USER',
}

const initPlugin = (store) => {
   store.dispatch('initialize')
}

export default createStore({
   state: {
      user: null,
   },
   mutations: {
      [Mutations.SET_USER](state, user) {
         state.user = user
      },
   },
   actions: {
      async initialize({dispatch}) {
         console.log(JSON.parse(localStorage.getItem('isLoggedIn')))
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
      },
      async logout({commit}) {
         await axios.get('/users/logout')
         commit(Mutations.SET_USER, null)
         localStorage.setItem('isLoggedIn', JSON.stringify(false))
      },
      async register(ctx, payload) {
         return await axios.post('/users/register', payload)
      },
   },
   modules: {},
   plugins: [initPlugin],
})
