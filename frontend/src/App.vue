<script>
import DefaultLayout from '@/layouts/default.vue'
import AuthLayout from '@/layouts/auth.vue'
import {mapActions} from 'vuex'

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
   methods: {
      ...mapActions(['fetchSession']),
   },
   async mounted() {
      await this.fetchSession()
   },
}
</script>

<template lang="pug">
component(:is="layout")
   router-view
</template>
