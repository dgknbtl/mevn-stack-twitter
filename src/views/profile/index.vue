<script>
export default {
   name: 'ProfileView',
}
</script>

<template lang="pug">
div
   h5 Profile view
   
   <nav>
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/profile/replies">replies</router-link> |
      <router-link to="/profile/media">media</router-link> |
      <router-link to="/profile/likes">likes</router-link> |
   </nav>
   <router-view />
</template>

<style lang="postcss" scoped></style>
