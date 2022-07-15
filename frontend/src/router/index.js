import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/home/index.vue'

const routes = [
   {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {layout: 'DefaultLayout', requiresAuth: true},
   },

   {
      path: '/login',
      name: 'login',
      meta: {layout: 'AuthLayout'},
      component: () =>
         import(/* webpackChunkName: "explore" */ '../views/auth/login.vue'),
   },
   {
      path: '/register',
      name: 'register',
      meta: {layout: 'AuthLayout'},
      component: () =>
         import(/* webpackChunkName: "explore" */ '../views/auth/register.vue'),
   },

   {
      path: '/explore',
      name: 'explore',
      meta: {layout: 'DefaultLayout', requiresAuth: true},
      component: () =>
         import(/* webpackChunkName: "explore" */ '../views/sub-pages/explore.vue'),
   },
   {
      path: '/notifications',
      name: 'notifications',
      meta: {layout: 'DefaultLayout', requiresAuth: true},
      component: () =>
         import(
            /* webpackChunkName: "notifications" */ '../views/sub-pages/notifications.vue'
         ),
   },
   {
      path: '/messages',
      name: 'messages',
      meta: {layout: 'DefaultLayout', requiresAuth: true},
      component: () =>
         import(/* webpackChunkName: "messages" */ '../views/sub-pages/messages.vue'),
   },
   {
      path: '/bookmarks',
      name: 'bookmarks',
      meta: {layout: 'DefaultLayout', requiresAuth: true},
      component: () =>
         import(/* webpackChunkName: "bookmarks" */ '../views/sub-pages/bookmarks.vue'),
   },
   {
      path: '/lists',
      name: 'lists',
      meta: {layout: 'DefaultLayout', requiresAuth: true},
      component: () =>
         import(/* webpackChunkName: "lists" */ '../views/sub-pages/lists.vue'),
   },
   {
      path: '/:username',
      name: 'profile',
      meta: {layout: 'DefaultLayout', requiresAuth: true},
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
      meta: {layout: 'DefaultLayout', requiresAuth: true},
      component: () =>
         import(/* webpackChunkName: "more" */ '../views/sub-pages/more.vue'),
   },
]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
})

router.beforeEach((to, from, next) => {
   if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (!JSON.parse(localStorage.getItem('isLoggedIn'))) {
         next({name: 'login'})
      } else {
         next()
      }
   } else {
      next()
   }
})

export default router
