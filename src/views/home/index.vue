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
   InlineSvg(:src="require('@/assets/icons/home.svg')" width="24" fill="black")
   InlineSvg(:src="require('@/assets/icons/explore.svg')" width="24" fill="black")
   InlineSvg(:src="require('@/assets/icons/notification.svg')" width="24" fill="black")
   InlineSvg(:src="require('@/assets/icons/message.svg')" width="24" fill="black")
   InlineSvg(:src="require('@/assets/icons/bookmark.svg')" width="24" fill="black")
   InlineSvg(:src="require('@/assets/icons/list.svg')" width="24" fill="black")
   InlineSvg(:src="require('@/assets/icons/profile.svg')" width="24" fill="black")
   InlineSvg(:src="require('@/assets/icons/more.svg')" width="24" fill="black")
</template>

<style lang="postcss" scoped>
.primary {
   color: rgb(var(--c-primary));
}
</style>
