<script>
import DefaultLayout from '@/layouts/default.vue'
import AuthLayout from '@/layouts/auth.vue'

const defaultLayout = 'Default'

export default {
   name: 'App',
   components: {
      DefaultLayout,
      AuthLayout,
   },
   computed: {
      layout() {
         return (this.$route.meta.layout || defaultLayout) + 'Layout'
      },
   },
}
</script>

<template lang="pug">
component(:is="layout")
   router-view
</template>
