<script>
import InlineSvg from 'vue-inline-svg'

export default {
   name: 'BaseLoader',
   components: {
      InlineSvg,
   },
   data() {
      return {
         loading: true,
      }
   },
   mounted() {
      setTimeout(() => {
         this.loading = false
      }, 1000)
   },
}
</script>

<template lang="pug">
.page-loader(v-show="loading")
   .page-loader-logo: InlineSvg(:src="require('@/assets/icons/twitter.svg')")
</template>

<style lang="postcss" scoped>
.page-loader {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: #fff;
   display: flex;
   align-items: center;
   justify-content: center;
   z-index: 9999;
   &-logo {
      transform: scale(1);
      animation: logo 1500ms;
      svg {
         width: 70px;
         height: 70px;
         fill: rgb(var(--c-primary));
      }
      @keyframes logo {
         from {
            transform: scale(0.7);
         }
         to {
            transform: scale(1);
         }
      }
   }
}
</style>
