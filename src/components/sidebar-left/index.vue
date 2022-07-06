<script>
import InlineSvg from 'vue-inline-svg'
import SidebarProfile from '@/components/sidebar-left/profile.vue'
import SidebarNav from '@/components/sidebar-left/navigation.vue'

export default {
   name: 'SidebarLeft',
   components: {
      InlineSvg,
      SidebarProfile,
      SidebarNav,
   },
}
</script>

<template lang="pug">
div.sidebar-wrapper
   div.sidebar-inner
      div
         RouterLink(tag="a" class="sidebar-logo" to="/"):  InlineSvg(:src="require('@/assets/icons/twitter.svg')")
         SidebarNav

      div: SidebarProfile
         
</template>

<style lang="postcss" scoped>
.sidebar {
   &-wrapper {
      position: fixed;
      width: 100%;
      max-width: inherit;
      @media (--m) {
         display: none;
      }
   }
   &-inner {
      padding-right: var(--gap-1);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100vh;
      @media (--d-lg) {
         align-items: flex-end;
      }
   }
   &-logo {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 2px;
      svg {
         width: 28px;
         fill: rgba(var(--c-primary));
      }
      &:hover {
         background-color: rgba(var(--c-primary), 0.1);
      }
   }
}
</style>
