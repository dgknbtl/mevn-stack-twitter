<script>
import InlineSvg from 'vue-inline-svg'

export default {
   name: 'BaseInput',
   components: {
      InlineSvg,
   },
   props: {
      color: {
         type: String,
         default: 'fill',
         validator: function (value) {
            if (['fill', 'outline'].indexOf(value) === -1)
               throw new Error(
                  `"${value}" is invalid prop: custom validator check failed`
               )
         },
      },
      size: {
         type: String,
         default: 'medium',
         validator: function (value) {
            if (['large', 'medium', 'small'].indexOf(value) === -1)
               throw new Error(
                  `"${value}" is invalid prop: custom validator check failed`
               )
         },
      },
      type: {
         type: String,
         default: 'text',
      },
      icon: {
         type: String,
      },
      placeholder: {
         type: String,
         default: 'Something...',
      },
   },
   data() {
      return {
         isFocus: false,
      }
   },
   methods: {
      setFocus() {
         this.$nextTick(() => {
            this.$refs.controlInput.focus()
         })
         this.isFocus = !this.isFocus
      },
   },
}
</script>

<template lang="pug">
.control-container
   div.control-wrapper( @click="setFocus")
      input(:class="[color, size]" :type="type" class="control" :placeholder="placeholder" ref="controlInput")
      .control-icon(v-if="icon"): InlineSvg(:src="require(`@/assets/icons/${icon}.svg`)" width="16" fill="black")
</template>

<style lang="postcss" scoped>
.control {
   position: relative;
   width: 100%;
   display: flex;
   align-items: center;
   border-radius: 999px;
   border: 1px solid transparent;
   &-container {
      position: relative;
   }
   &:focus {
      outline: none;
   }
   &-icon {
      top: 50%;
      transform: translateY(-50%);
      left: 20px;
      position: absolute;
      display: flex;
      align-items: center;
      margin-right: 10px;
      svg {
         fill: rgb(var(--c-gray));
      }
   }
   &.fill {
      background-color: rgba(var(--c-light), 0.4);
      &:focus {
         border-color: rgb(var(--c-primary));
         background-color: #fff;
         ~ .control-icon svg,
         path {
            fill: rgb(var(--c-primary));
         }
      }
   }
   &.large {
      height: 52px;
      padding-left: 45px;
      padding-right: calc(var(--gap-1) * 2);
      span {
         font-size: var(--fs-md-2);
      }
   }
   &.medium {
      height: 42px;
      padding-left: 45px;
      padding-right: calc(var(--gap-1) * 1.2);
      span {
         font-size: var(--fs-md);
      }
   }
   &.small {
      height: 30px;
      padding-left: var(--gap-1);
      padding-right: var(--gap-1);
      span {
         font-size: var(--fs-sm);
      }
   }
}
</style>
