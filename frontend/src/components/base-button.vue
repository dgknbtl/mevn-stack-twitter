<script>
import BaseText from '@/components/base-text.vue'

export default {
   name: 'BaseButton',
   components: {
      BaseText,
   },
   props: {
      tag: {
         default: 'button',
         validator: function (value) {
            return ['button', 'a'].includes(value)
         },
      },
      size: {
         default: 'btn-large',
         validator: function (value) {
            return ['btn-small', 'btn-medium', 'btn-large'].includes(value)
         },
      },
      color: {
         default: 'btn-primary',
         validator: function (value) {
            return [
               'btn-primary',
               'btn-gray',
               'btn-light',
               'btn-dark',
               'btn-outline',
            ].includes(value)
         },
      },
      isLoading: {
         type: Boolean,
         default: false,
      },
   },
}
</script>

<template lang="pug">
component(:is="tag" :class="[size, color]" class="btn")
  span(v-if="isLoading" class="circle-loader")
  BaseText(tag="span" weight="fw-bold" v-else): slot
</template>

<style lang="postcss" scoped>
.btn {
   border-radius: 999px;
   display: inline-flex;
   align-items: center;
   justify-content: center;
   flex-shrink: 0;
   cursor: pointer;
   border: 1px solid transparent;
   span {
      line-height: 1.5;
   }
   &-large {
      height: 52px;
      padding-left: calc(var(--gap-1) * 2);
      padding-right: calc(var(--gap-1) * 2);
      span {
         font-size: var(--fs-md-2);
      }
   }
   &-medium {
      height: 36px;
      padding-left: calc(var(--gap-1) * 1.2);
      padding-right: calc(var(--gap-1) * 1.2);
      span {
         font-weight: 600;
         font-size: var(--fs-md);
      }
   }
   &-small {
      height: 30px;
      padding-left: var(--gap-1);
      padding-right: var(--gap-1);
      span {
         font-size: var(--fs-sm);
      }
   }

   &-primary {
      color: #fff;
      background-color: rgb(var(--c-primary));
      &:hover {
         background-color: rgb(var(--c-primary-2));
      }

      &[disabled] {
         background-color: rgba(var(--c-primary), 0.6);
         &:hover {
         }
      }
   }

   &-gray {
      color: #fff;
      background-color: rgb(var(--c-gray-2));
   }

   &-light {
      color: #fff;
      background-color: rgb(var(--c-light));
   }

   &-dark {
      color: #fff;
      background-color: rgb(var(--c-dark));
   }

   &-outline {
      border-color: rgb(var(--c-light));
      &:hover {
         background-color: rgba(var(--c-light), 0.2);
      }
   }

   &[disabled] {
      cursor: not-allowed;
   }
}
</style>
