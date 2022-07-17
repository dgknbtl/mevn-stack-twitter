<script>
import ProfileHeader from '@/components/profile/profile-header.vue'
import ProfileNav from '@/components/profile/profile-nav.vue'
import BaseText from '@/components/base-text.vue'
import {mapState, mapActions} from 'vuex'

export default {
   name: 'ProfileView',
   components: {
      ProfileHeader,
      ProfileNav,
      BaseText,
   },
   data() {
      return {
         error: null,
      }
   },
   computed: {
      ...mapState(['searchedUser']),
   },
   methods: {
      ...mapActions(['fetchUser']),
      async getUser(handle) {
         try {
            await this.fetchUser(handle)
         } catch (e) {
            this.error = e.response.data.message
         }
      },
      getHandle(handle) {
         this.searchedUserHandle = handle
      },
   },
   async created() {
      await this.getUser(this.$route.params.handle)
   },
}
</script>

<template lang="pug">
div
   ProfileHeader(:searchedUser="searchedUser" :error="error" v-if="searchedUser")
   BaseText(size="fs-large" weight="fw-bold" class="text"  v-if="error") This account doesn’t exist

   div(v-if="searchedUser")
      ProfileNav(:searchedUserHandle="searchedUser.handle")
      RouterView( :tweets="searchedUser.tweets" :replies="searchedUser.replies" :likes="searchedUser.likes"  :media="searchedUser.media")
</template>

<style lang="postcss" scoped>
.text {
   padding: 30px;
   display: flex;
   align-items: center;
   justify-content: center;
}
</style>
