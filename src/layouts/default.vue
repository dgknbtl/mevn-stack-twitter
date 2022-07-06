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
      grid-template-columns: 88px 1fr 348px;
      flex-grow: 1;
      padding-left: var(--gap-1);
      padding-right: var(--gap-1);
   }
   &-left {
      position: relative;
      width: 100%;
      max-width: 275px;
      @media (--d-lg) {
         max-width: 88px;
      }
   }
   &-middle {
      border-left: 1px solid rgb(var(--c-light));
      border-right: 1px solid rgb(var(--c-light));
   }
   &-right {
      margin-left: 30px;
      position: relative;
      width: 100%;
      max-width: 348px;
   }
}
</style>
