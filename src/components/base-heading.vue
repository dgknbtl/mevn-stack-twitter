<script>
import BaseText from '@/components/base-text'
import InlineSvg from 'vue-inline-svg'

export default {
   name: 'BaseHeading',
   components: {
      BaseText,
      InlineSvg,
   },
   props: {
      title: {
         type: String,
         default: 'Latest Tweets',
      },
      icon: {
         type: String,
         default: 'star',
      },
   },
}
</script>

<template lang="pug">
div.heading
   .heading-title: BaseText(tag="span" weight="fw-bold" size="fs-large")  {{title}}
   .heading-icon(@click="$emit('icon-action')"): InlineSvg(:src="require(`@/assets/icons/${icon}.svg`)" width="20" fill="black")
</template>

<style lang="postcss" scoped>
.heading {
   padding-left: var(--gap-1);
   padding-right: var(--gap-1);
   height: 52px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   &-icon {
      width: 36px;
      height: 36px;
      border-radius: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:hover {
         background-color: rgb(var(--c-light));
      }
   }
}
</style>
