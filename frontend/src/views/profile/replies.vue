<script>
import BaseTweet from '@/components/tweet/base-tweet.vue'
import BaseText from '@/components/base-text.vue'

export default {
   name: 'RepliesView',
   components: {
      BaseTweet,
      BaseText,
   },
   computed: {
      replies() {
         return this.$store.state.user.replies
      },
   },
}
</script>

<template lang="pug">
BaseText(size="fs-large" weight="fw-bold" class="text" v-if="!replies") You don’t have any replies yet

div(v-for="(replie,index) in replies" key="index" v-else)
   BaseTweet(:tweet="replie")
</template>

<style lang="postcss" scoped>
.text {
   padding: 30px;
   display: flex;
   align-items: center;
   justify-content: center;
}
</style>
