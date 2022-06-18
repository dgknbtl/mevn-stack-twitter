<script>
import ProfileHeader from '@/components/profile/profile-header.vue'

export default {
   name: 'ProfileView',
   components: {
      ProfileHeader,
   },
}
</script>

<template lang="pug">
div
   ProfileHeader
   <nav>
      <router-link to="/profile/replies">replies</router-link> |
      <router-link to="/profile/media">media</router-link> |
      <router-link to="/profile/likes">likes</router-link> |
   </nav>
   <router-view />
</template>

<style lang="postcss" scoped></style>
