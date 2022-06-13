<script>
import BaseHeading from '@/components/base-heading'
import BaseText from '@/components/base-text'

export default {
   name: 'HomeView',
   components: {
      BaseHeading,
      BaseText,
   },
   methods: {
      someEvent() {
         alert()
      },
   },
}
</script>

<template lang="pug">
div
   BaseHeading(title="Latest Tweets" icon="star" @icon-action="someEvent")
      
   p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</template>

<style lang="postcss" scoped>
.primary {
   color: rgb(var(--c-primary));
}
</style>
