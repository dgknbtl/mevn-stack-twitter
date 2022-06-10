import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/home.vue'

const routes = [
   {
      path: '/',
      name: 'home',
      component: HomeView,
   },
   {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '../views/about.vue'),
   },
]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
})

export default router
