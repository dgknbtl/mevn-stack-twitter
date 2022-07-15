<script>
import InlineSvg from 'vue-inline-svg'
import DefaultLayout from '@/layouts/default.vue'
import AuthLayout from '@/layouts/auth.vue'
import {mapActions, mapState} from 'vuex'

export default {
   name: 'App',
   components: {
      InlineSvg,
      DefaultLayout,
      AuthLayout,
   },
   data() {
      return {
         loading: true,
      }
   },
   computed: {
      ...mapState(['isLoggedIn']),
      layout() {
         return this.$route.meta.layout || 'DefaultLayout'
      },
      selectedKeys() {
         return [this.$route.name]
      },
   },
   methods: {
      ...mapActions(['initialize']),
   },
   async mounted() {
      setTimeout(() => {
         this.loading = false
      }, 1000)
      if (!this.isLoggedIn) return
      await this.initialize()
   },
}
</script>

<template lang="pug">
.page-loader(v-show="loading")
   .page-loader-logo: InlineSvg(:src="require('@/assets/icons/twitter.svg')")

component(:is="layout" :selectedKeys="selectedKeys" v-if="!loading")
   RouterView
   //- router-view
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
