<script>
import BaseText from '@/components/base-text'
import InlineSvg from 'vue-inline-svg'

export default {
   name: 'HomeView',
   components: {
      BaseText,
      InlineSvg,
   },
}
</script>

<template lang="pug">
div
   BaseText(tag="p" size="small") Hello
   BaseText(class="primary" tag="p" size="large" weight="bold") Hello
   
   InlineSvg(:src="require('@/icons/home.svg')" width="24" fill="black")
   InlineSvg(:src="require('@/icons/explore.svg')" width="24" fill="black")
   InlineSvg(:src="require('@/icons/notification.svg')" width="24" fill="black")
   InlineSvg(:src="require('@/icons/message.svg')" width="24" fill="black")
   InlineSvg(:src="require('@/icons/bookmark.svg')" width="24" fill="black")
   InlineSvg(:src="require('@/icons/list.svg')" width="24" fill="black")
   InlineSvg(:src="require('@/icons/profile.svg')" width="24" fill="black")
   InlineSvg(:src="require('@/icons/more.svg')" width="24" fill="black")
</template>

<style lang="postcss" scoped>
.primary {
   color: rgb(var(--c-primary));
}
</style>
