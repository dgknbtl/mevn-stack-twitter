<script>
import BaseContainer from '@/components/base-container.vue'
import SidebarLeft from '@/components/sidebar/sidebar-left.vue'

export default {
   name: 'DefaultLayout',
   components: {
      SidebarLeft,
      BaseContainer,
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
         p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</template>

<style lang="postcss" scoped>
.layout {
   display: grid;
   grid-template-columns: 260px 1fr 348px;
   height: inherit;
   &-middle {
      border-left: 1px solid rgb(var(--c-light));
      border-right: 1px solid rgb(var(--c-light));
   }
   &-right {
      margin-left: 30px;
   }
}
</style>
