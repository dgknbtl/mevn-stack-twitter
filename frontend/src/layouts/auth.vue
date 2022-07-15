<script>
export default {
   name: 'AuthLayout',
}
</script>

<template lang="pug">
div.auth-page
   router-view
</template>

<style lang="postcss" scoped>
.container {
}
.auth-page {
   max-width: 420px;
   width: 100%;
   padding-top: 60px;
   margin: auto;
   padding-left: 14px;
   padding-right: 14px;
}
</style>
