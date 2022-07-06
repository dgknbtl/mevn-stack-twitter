<script>
import BaseContainer from '@/components/base-container.vue'
import SidebarLeft from '@/components/sidebar-left/index.vue'
import SidebarRight from '@/components/sidebar-right/index.vue'

export default {
   name: 'DefaultLayout',
   components: {
      BaseContainer,
      SidebarLeft,
      SidebarRight,
   },
}
</script>

<template lang="pug">
BaseContainer
   div.layout
      .layout-left
         SidebarLeft
      .layout-middle
         RouterView
      .layout-right
        SidebarRight
</template>

<style lang="postcss" scoped>
.layout {
   position: relative;
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
</style>
