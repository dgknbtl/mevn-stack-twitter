import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/home/index.vue'
import store from '../store/index'

// function guardMyroute(to, from, next) {
//    if (store.state.isLoggedIn) {
//       next() // allow to enter route
//    } else {
//       next('/login') // go to '/login';
//    }
// }

const routes = [
   {
      path: '/',
      name: 'home',
      component: HomeView,
   },

   {
      path: '/login',
      name: 'login',
      meta: {layout: 'Auth'},
      component: () =>
         import(/* webpackChunkName: "explore" */ '../views/auth/login.vue'),
   },
   {
      path: '/register',
      name: 'register',
      meta: {layout: 'Auth'},
      component: () =>
         import(/* webpackChunkName: "explore" */ '../views/auth/register.vue'),
   },

   {
      path: '/explore',
      name: 'explore',
      meta: {layout: 'Default'},
      component: () =>
         import(/* webpackChunkName: "explore" */ '../views/sub-pages/explore.vue'),
   },
   {
      path: '/notifications',
      name: 'notifications',
      meta: {layout: 'Default'},
      component: () =>
         import(
            /* webpackChunkName: "notifications" */ '../views/sub-pages/notifications.vue'
         ),
   },
   {
      path: '/messages',
      name: 'messages',
      meta: {layout: 'Default'},
      component: () =>
         import(/* webpackChunkName: "messages" */ '../views/sub-pages/messages.vue'),
   },
   {
      path: '/bookmarks',
      name: 'bookmarks',
      meta: {layout: 'Default'},
      component: () =>
         import(/* webpackChunkName: "bookmarks" */ '../views/sub-pages/bookmarks.vue'),
   },
   {
      path: '/lists',
      name: 'lists',
      meta: {layout: 'Default'},
      component: () =>
         import(/* webpackChunkName: "lists" */ '../views/sub-pages/lists.vue'),
   },
   {
      path: '/:username',
      name: 'profile',
      meta: {layout: 'Default'},
      component: () =>
         import(/* webpackChunkName: "profile" */ '../views/profile/index.vue'),

      children: [
         {
            path: '',
            name: 'profile-tweets',
            component: () =>
               import(
                  /* webpackChunkName: "profile-tweets" */ '../views/profile/tweets.vue'
               ),
         },
         {
            path: 'replies',
            name: 'profile-replies',
            component: () =>
               import(
                  /* webpackChunkName: "profile-replies" */ '../views/profile/replies.vue'
               ),
         },
         {
            path: 'media',
            name: 'profile-media',
            component: () =>
               import(
                  /* webpackChunkName: "profile-media" */ '../views/profile/media.vue'
               ),
         },
         {
            path: 'likes',
            name: 'profile-likes',
            component: () =>
               import(
                  /* webpackChunkName: "profile-likes" */ '../views/profile/likes.vue'
               ),
         },
      ],
   },
   {
      path: '/more',
      name: 'more',
      meta: {layout: 'Default'},
      component: () =>
         import(/* webpackChunkName: "more" */ '../views/sub-pages/more.vue'),
   },
]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
})

router.beforeEach((to, from, next) => {
   // redirect to login page if not logged in and trying to access a restricted page
   const publicPages = ['/login', '/register']
   const authRequired = !publicPages.includes(to.path)
   const loggedIn = store.state.isLoggedIn

   if (authRequired && !loggedIn) {
      return next('/login')
   }

   next()
})

export default router
