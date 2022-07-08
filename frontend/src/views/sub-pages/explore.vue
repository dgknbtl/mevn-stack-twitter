<script>
import BaseHeading from '@/components/base-heading'
import BaseDropdown from '@/components/base-dropdown'
export default {
   name: 'ExploreView',
   components: {
      BaseHeading,
      BaseDropdown,
   },
}
</script>

<template lang="pug">
div
   BaseHeading(title="Latest Tweets" icon="star" @icon-action="someEvent")
</template>

<style lang="postcss" scoped></style>
