<script>
import BaseInput from '@/components/base-input.vue'

export default {
   name: 'SidebarSearch',
   components: {
      BaseInput,
   },
}
</script>

<template lang="pug">
div.search
   form.search-form
      BaseInput(placeholder="Search Tweets")  
</template>

<style lang="postcss" scoped>
.search {
   margin-top: 12px;
   &-form {
      position: relative;
   }
}
</style>
