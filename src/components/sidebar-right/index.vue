<script>
import SidebarSearch from '@/components/sidebar-right/search.vue'

export default {
   name: 'SidebarRight',
   components: {
      SidebarSearch,
   },
}
</script>

<template lang="pug">
div.sidebar
   .sidebar-inner
      SidebarSearch(placeholder="Search Twitter")
</template>

<style lang="postcss" scoped>
.sidebar {
   position: fixed;
   width: 100%;
   max-width: inherit;
   &-inner {
      padding-right: var(--gap-1);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100vh;
   }
}
</style>
