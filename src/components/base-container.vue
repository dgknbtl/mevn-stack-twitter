<script>
export default {
   name: 'BaseContainer',
}
</script>

<template lang="pug">
div.container
   slot
</template>

<style lang="postcss" scoped>
.container {
   max-width: 1240px;
   width: 100%;
   margin-left: auto;
   margin-right: auto;
   height: 100vh;
}
</style>
