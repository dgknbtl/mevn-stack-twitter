<script>
import BaseHeading from '@/components/base-heading'

export default {
   name: 'ExploreView',
   components: {
      BaseHeading,
   },
}
</script>

<template lang="pug">
div
   BaseHeading(title="Latest Tweets" icon="star" @icon-action="someEvent")
</template>

<style lang="postcss" scoped></style>
