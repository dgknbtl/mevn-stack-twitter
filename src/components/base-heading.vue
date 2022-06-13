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
      subTitle: {
         type: String,
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
   .heading-group
      .heading-title: BaseText(tag="span" weight="fw-bold" size="fs-large")  {{title}}
      .heading-subtitle: BaseText(tag="span" weight="fw-medium" size="fs-small")  {{subTitle}}
   .heading-icon(@click="$emit('icon-action')"): InlineSvg(:src="require(`@/assets/icons/${icon}.svg`)" width="20" fill="black")
</template>

<style lang="postcss" scoped>
.heading {
   position: sticky;
   top: 0;
   background-color: rgba(var(--c-white), 0.8);
   padding-left: var(--gap-1);
   padding-right: var(--gap-1);
   height: 52px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   backdrop-filter: blur(10px);
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
   &-subtitle {
      color: rgb(var(--c-gray));
   }
   &-group {
      line-height: 18px;
   }
}
</style>
