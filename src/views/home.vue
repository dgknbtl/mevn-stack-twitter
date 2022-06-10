<script>
import BaseText from '@/components/base-text'

export default {
   name: 'HomeView',
   components: {
      BaseText,
   },
}
</script>

<template lang="pug">
div
   BaseText(tag="p" size="small") Hello
   BaseText(class="primary" tag="p" size="large" weight="bold") Hello
</template>

<style lang="postcss" scoped>
.primary {
   color: rgb(var(--c-primary));
}
</style>
