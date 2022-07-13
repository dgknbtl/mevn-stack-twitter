<script>
import InlineSvg from 'vue-inline-svg'
import BaseAvatar from '@/components/base-avatar.vue'
import BaseText from '@/components/base-text.vue'
import BaseDropdown from '@/components/base-dropdown.vue'
import {mapActions} from 'vuex'

export default {
   name: 'SidebarProfile',
   components: {
      InlineSvg,
      BaseAvatar,
      BaseText,
      BaseDropdown,
   },
   methods: {
      ...mapActions(['logout']),
      async logoutUser() {
         try {
            await this.logout()
            this.$router.push('/login')
         } catch (error) {
            console.log(error.response.data)
         }
      },
   },
}
</script>

<template lang="pug">
BaseDropdown(position="top"  alignment="left")
   template(#dropdown-toggle) 
      .more
         .more-avatar: BaseAvatar
         div.more-text
            BaseText(class="more-user" weight="fw-bold") Doğukan Batal
            .more-handle @dogukanbatal
         InlineSvg(:src="require('@/assets/icons/dot.svg')" width="18")

   template(#dropdown-nav)
      div(class="dropdown-item") Add an existing account
      div(class="dropdown-item" @click="logoutUser") Logout @dogukanbatal
</template>

<style lang="postcss" scoped>
.more {
   position: relative;
   display: flex;
   align-items: center;
   padding: 12px;
   border-radius: 999px;
   margin-top: var(--gap-1);
   margin-bottom: var(--gap-1);
   cursor: pointer;
   &:hover {
      background-color: rgb(var(--c-light-2));
   }
   &-avatar {
      margin-right: 12px;
   }
   svg {
      margin-left: auto;
      margin-right: 0;
   }

   @media (--d-lg) {
      padding: 0;
      &-text,
      svg {
         display: none;
      }
      &-avatar {
         margin-right: 0;
      }
   }
}
.dropdown-item {
   cursor: pointer;
}
</style>
