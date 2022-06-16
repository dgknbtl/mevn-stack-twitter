<script>
import SidebarSearch from '@/components/sidebar-right/search.vue'
import SidebarTrends from '@/components/sidebar-right/trends.vue'

export default {
   name: 'SidebarRight',
   components: {
      SidebarSearch,
      SidebarTrends,
   },
}
</script>

<template lang="pug">
div.sidebar
   .sidebar-inner
      SidebarSearch(placeholder="Search Twitter")
      SidebarTrends
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
      height: 100vh;
   }
}
</style>
