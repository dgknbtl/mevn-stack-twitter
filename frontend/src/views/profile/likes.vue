<script>
import BaseTweet from '@/components/tweet/base-tweet.vue'
import BaseText from '@/components/base-text.vue'

export default {
   name: 'LikesView',
   components: {
      BaseTweet,
      BaseText,
   },
   props: {
      likes: {
         type: Object,
      },
   },
}
</script>

<template lang="pug">
BaseText(size="fs-large" weight="fw-bold" class="text" v-if="!likes.length") You don’t have any likes yet

div(v-for="(like,index) in likes" key="index" v-else)
   BaseTweet(:tweet="like")
</template>

<style lang="postcss" scoped>
.text {
   padding: 30px;
   display: flex;
   align-items: center;
   justify-content: center;
}
</style>
