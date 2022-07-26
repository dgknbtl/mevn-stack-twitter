<script>
import BaseContainer from '@/components/base-container.vue'
import SidebarLeft from '@/components/sidebar-left/index.vue'
import SidebarRight from '@/components/sidebar-right/index.vue'
import BaseModal from '@/components/base-modal.vue'
import NewTweet from '@/components/tweet/new-tweet.vue'

export default {
   name: 'DefaultLayout',
   components: {
      BaseContainer,
      SidebarLeft,
      SidebarRight,
      BaseModal,
      NewTweet,
   },
   data() {},
}
</script>

<template lang="pug">
BaseContainer
   div.layout
      .layout-left
         SidebarLeft
      .layout-middle
         keep-alive
            RouterView
      .layout-right
        SidebarRight

   BaseModal(title="" :button="false" :isModalOpen="this.$store.state.isTweetModalOpen"  @modal-close="this.$store.commit('UPDATE_TWEET_MODAL_STATE', false)")
      NewTweet(class="new-tweet") 
      
</template>

<style lang="postcss" scoped>
.layout {
   display: grid;
   grid-template-columns: 275px 1fr 348px;
   height: inherit;
   @media (--d-lg) {
      grid-template-columns: 82px 1fr 348px;
      flex-grow: 1;
   }
   @media (--t-lg) {
      grid-template-columns: 82px 1fr;
   }
   @media (--m) {
      grid-template-columns: 1fr;
   }
   &-left {
      position: relative;
      width: 100%;
      max-width: 275px;
      @media (--d-lg) {
         max-width: 82px;
      }
      @media (--m) {
         display: none;
      }
   }
   &-middle {
      border-left: 1px solid rgb(var(--c-light));
      border-right: 1px solid rgb(var(--c-light));
      @media (--t-lg) {
         width: 100%;
      }
   }
   &-right {
      margin-left: 30px;
      position: relative;
      width: 100%;
      max-width: 348px;
      @media (--t-lg) {
         display: none;
      }
   }
}

.new-tweet {
   margin-left: -14px;
   margin-right: -14px;
   margin-bottom: -14px;
   border-bottom: 0 !important;
}
</style>
