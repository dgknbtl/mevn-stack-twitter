<script>
import ProfileHeader from '@/components/profile/profile-header.vue'
import ProfileNav from '@/components/profile/profile-nav.vue'

export default {
   name: 'ProfileView',
   components: {
      ProfileHeader,
      ProfileNav,
   },
}
</script>

<template lang="pug">
div
   ProfileHeader
   ProfileNav
   RouterView
</template>

<style lang="postcss" scoped></style>
