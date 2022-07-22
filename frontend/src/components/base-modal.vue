<script>
import InlineSvg from 'vue-inline-svg'
import BaseButton from '@/components/base-button.vue'
import BaseText from '@/components/base-text.vue'

export default {
   name: 'BaseModal',
   components: {
      InlineSvg,
      BaseButton,
      BaseText,
   },
   props: {
      title: {
         type: String,
         default: 'Modal Title',
      },
      head: {
         type: Boolean,
         default: true,
      },
      button: {
         type: Boolean,
         default: true,
      },
      isModalOpen: {
         type: Boolean,
         default: false,
      },
   },
}
</script>

<template lang="pug">
.modal(v-if="isModalOpen")
   .modal-body 
      .modal-head(v-if="head")
         div.modal-head-left
            .modal-close(@click="this.$store.commit('UPDATE_TWEET_MODAL_STATE',false)"): InlineSvg(:src="require('@/assets/icons/times.svg')" width="16" height="16")
            .modal-title: BaseText( weight="fw-bold") {{title}}
         .modal-button(v-if="button" @click="$emit('button-event')"): BaseButton(size="btn-small" color="btn-dark") Save
      .modal-content
         slot
   .overlay
</template>

<style lang="postcss" scoped>
.modal {
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
   display: flex;
   align-items: center;
   justify-content: center;
   &-body {
      position: relative;
      max-width: 500px;
      width: 100%;
      border-radius: 16px;
      background-color: #fff;
      z-index: 100;
   }
   &-content {
      padding: var(--gap-1);
   }
   &-close {
      width: 16px;
      height: 16px;
      cursor: pointer;
   }

   &-title {
      padding-left: var(--gap-1);
      .fs-medium {
         font-size: 18px !important;
      }
   }
   &-button {
      margin-left: auto;
      margin-right: 0;
   }
   &-head {
      padding: var(--gap-1) var(--gap-1) 0 var(--gap-1);
      display: flex;
      align-items: center;
      &-left {
         display: flex;
         align-items: center;
      }
   }
   .overlay {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgb(var(--c-dark), 0.3);
   }
}
</style>
