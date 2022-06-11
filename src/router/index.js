import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/home/index.vue'

const routes = [
   {
      path: '/',
      name: 'home',
      component: HomeView,
   },
   {
      path: '/explore',
      name: 'explore',
      component: () =>
         import(/* webpackChunkName: "explore" */ '../views/sub-pages/explore.vue'),
   },
   {
      path: '/notifications',
      name: 'notifications',
      component: () =>
         import(
            /* webpackChunkName: "notifications" */ '../views/sub-pages/notifications.vue'
         ),
   },
   {
      path: '/messages',
      name: 'messages',
      component: () =>
         import(/* webpackChunkName: "messages" */ '../views/sub-pages/messages.vue'),
   },
   {
      path: '/bookmarks',
      name: 'bookmarks',
      component: () =>
         import(/* webpackChunkName: "bookmarks" */ '../views/sub-pages/bookmarks.vue'),
   },
   {
      path: '/lists',
      name: 'lists',
      component: () =>
         import(/* webpackChunkName: "lists" */ '../views/sub-pages/lists.vue'),
   },
   {
      path: '/profile',
      name: 'profile',
      component: () =>
         import(/* webpackChunkName: "profile" */ '../views/profile/index.vue'),
      children: [
         {
            path: '',
            name: 'ProfileTweets',
            component: () =>
               import(/* webpackChunkName: "replies" */ '../views/profile/tweets.vue'),
         },
         {
            path: 'replies',
            name: 'ProfileReplies',
            component: () =>
               import(/* webpackChunkName: "replies" */ '../views/profile/replies.vue'),
         },
         {
            path: 'media',
            name: 'ProfileMedia',
            component: () =>
               import(/* webpackChunkName: "media" */ '../views/profile/media.vue'),
         },
         {
            path: 'likes',
            name: 'ProfileLikes',
            component: () =>
               import(/* webpackChunkName: "likes" */ '../views/profile/likes.vue'),
         },
      ],
   },
]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
})

export default router
