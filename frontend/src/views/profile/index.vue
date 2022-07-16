<script>
import ProfileHeader from '@/components/profile/profile-header.vue'
import ProfileNav from '@/components/profile/profile-nav.vue'
import {mapActions, mapState} from 'vuex'

export default {
   name: 'ProfileView',
   components: {
      ProfileHeader,
      ProfileNav,
   },
   data() {
      return {
         currentUser: null,
         error: null,
      }
   },
   computed: {
      ...mapState(['user']),
   },
   methods: {
      ...mapActions(['fetchUser']),
      async getUser(handle) {
         try {
            const user = await this.fetchUser(handle)
            this.currentUser = user.data
         } catch (e) {
            this.error = e.response.data.message
         }
      },
      getHandle(handle) {
         this.currentUserHandle = handle
      },
   },
   beforeMount() {
      this.currentUser = this.user
   },
   async mounted() {
      if (this.$route.params.handle !== this.currentUserHandle) {
         await this.getUser(this.$route.params.handle)
      }
   },
}
</script>

<template lang="pug">
div
   ProfileHeader(:currentUser="currentUser")
   ProfileNav(:currentUserHandle="currentUser.handle")
   RouterView(:tweets="currentUser.tweets" :replies="currentUser.replies" :likes="currentUser.likes"  :media="currentUser.media")
</template>

<style lang="postcss" scoped></style>
