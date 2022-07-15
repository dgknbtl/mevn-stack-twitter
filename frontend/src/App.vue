<script>
import InlineSvg from 'vue-inline-svg'
import DefaultLayout from '@/layouts/default.vue'
import AuthLayout from '@/layouts/auth.vue'
import BaseLoader from '@/components/base-loader.vue'

export default {
   name: 'App',
   components: {
      InlineSvg,
      DefaultLayout,
      AuthLayout,
      BaseLoader,
   },
   computed: {
      layout() {
         return this.$route.meta.layout || 'DefaultLayout'
      },
      selectedKeys() {
         return [this.$route.name]
      },
   },
}
</script>

<template lang="pug">
div
   BaseLoader
   component(:is="layout" :selectedKeys="selectedKeys" v-if="!loading")
      RouterView
</template>
