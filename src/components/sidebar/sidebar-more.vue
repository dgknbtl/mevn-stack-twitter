<script>
import InlineSvg from 'vue-inline-svg'
import BaseAvatar from '@/components/base-avatar.vue'
import BaseText from '@/components/base-text.vue'

export default {
   name: 'SidebarMenu',
   components: {
      BaseAvatar,
      BaseText,
      InlineSvg,
   },
   data() {
      return {
         isDropdownShow: false,
      }
   },
   methods: {
      toggleDropdown() {
         this.isDropdownShow = !this.isDropdownShow
      },
   },
}
</script>

<template lang="pug">
.more(@click="toggleDropdown")
   .more-avatar: BaseAvatar
   div
      BaseText(class="more-user" weight="fw-bold") Doğukan Batal
      .more-handle @dogukanbatal

   InlineSvg(:src="require('@/assets/icons/dot.svg')" width="18")
   .more-dropdown(v-if="isDropdownShow")
      ul.dropdown-nav
         li: RouterLink(to="/") Add and existing account
         li: BaseText Log out @dogukanbatal

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
   .more-dropdown {
      position: absolute;
      top: -100%;
      margin-top: -50px;
      box-shadow: rgb(101 119 134 / 20%) 0px 0px 15px,
         rgb(101 119 134 / 15%) 0px 0px 3px 1px;
      width: 290px;
      background-color: #fff;
      min-height: 100px;
      border-radius: 15px;
      .dropdown-nav {
         li {
            display: flex;
            align-items: center;
            height: 52px;
            padding-left: var(--gap-1);
            padding-right: var(--gap-1);
            &:hover {
               background-color: rgb(var(--c-light-2));
            }
         }
      }
   }
}
</style>
