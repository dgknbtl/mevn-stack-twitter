<script>
import BaseHeading from '@/components/base-heading'
import BaseText from '@/components/base-text'
import NewTweet from '@/components/new-tweet'

export default {
   name: 'HomeView',
   components: {
      BaseHeading,
      BaseText,
      NewTweet,
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
   NewTweet
</template>

<style lang="postcss" scoped></style>
