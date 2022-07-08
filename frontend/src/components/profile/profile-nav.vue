<script>
import BaseText from '@/components/base-text.vue'
export default {
   name: 'ProfileNav',
   components: {
      BaseText,
   },
}
</script>

<template lang="pug">
<nav class="profileNav">
   router-link(class="profileNav-link" to="/profile/"): BaseText(tag="span" size="fs-medium" weight="fw-medium") Tweets
   router-link(class="profileNav-link" to="/profile/replies"): BaseText(tag="span" size="fs-medium" weight="fw-medium") Tweets &amp; Replies 
   router-link(class="profileNav-link" to="/profile/media"): BaseText(tag="span" size="fs-medium" weight="fw-medium")  Media 
   router-link(class="profileNav-link" to="/profile/likes"): BaseText(tag="span" size="fs-medium" weight="fw-medium")  Likes 
</nav>
</template>

<style lang="postcss" scoped>
.profileNav {
   display: flex;
   align-items: center;
   justify-content: space-around;
   border-bottom: 1px solid rgb(var(--c-light));
   &-link {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
         position: relative;
         display: flex;
         align-items: center;
         justify-content: center;
         height: 53px;
         color: rgb(var(--c-gray));
         &::before {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 0;
            right: 0;
            margin: auto;
            width: 100%;
            height: 4px;
            background-color: rgb(var(--c-primary));
            opacity: 0;
         }
      }
      &:hover {
         cursor: pointer;
         background-color: rgba(var(--c-light-2), 0.7);
      }
   }

   .router-link-exact-active {
      span {
         color: rgb(var(--c-primary));
         &::before {
            opacity: 1;
         }
      }
   }
}
</style>
