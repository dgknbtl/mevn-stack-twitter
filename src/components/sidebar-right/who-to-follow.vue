<script>
import BaseText from '@/components/base-text.vue'
import BaseAvatar from '@/components/base-avatar.vue'
import BaseButton from '@/components/base-button.vue'

export default {
   nane: 'SidebarWhoToFollow',
   components: {
      BaseText,
      BaseAvatar,
      BaseButton,
   },
}
</script>

<template lang="pug">
.followCard
   .followCard-title:  BaseText(tag="span" weight="fw-bold" size="fs-large") Who to follow
   .followCard-item
      .avatar: BaseAvatar(size="large" src="https://pbs.twimg.com/profile_images/993649592422907904/yD7LkqU2_400x400.jpg")
      div
         .user: BaseText(tag="a" weight="fw-bold" size="fs-medium") Google AI
         .handle: BaseText(tag="a" size="fs-medium") @GoogleAI
      BaseButton(color="btn-dark" size="btn-small" tag="a" href="#") Follow 

   .followCard-item
      .avatar: BaseAvatar(size="large" src="https://pbs.twimg.com/profile_images/648888480974508032/66_cUYfj_400x400.jpg")
      div
         .user: BaseText(tag="a" weight="fw-bold" size="fs-medium") Edward Snowden
         .handle: BaseText(tag="a" size="fs-medium") @Snowden
      BaseButton(color="btn-dark" size="btn-small" tag="a" href="#") Follow 
      
   .followCard-item
      .avatar: BaseAvatar(size="large" src="https://pbs.twimg.com/profile_images/1448413506936639491/2mvOrPuF_400x400.jpg")
      div
         .user: BaseText(tag="a" weight="fw-bold" size="fs-medium") Forbes
         .handle: BaseText(tag="a" size="fs-medium") @Forbes
      BaseButton(color="btn-dark" size="btn-small" tag="a" href="#") Follow 
   .followCard-show
      BaseText(tag="a" href="#" size="fs-medium" weight="fw-normal") Show More
</template>

<style lang="postcss" scoped>
.followCard {
   background-color: rgb(var(--c-light-2));
   border-radius: 12px;
   overflow: hidden;
   margin-top: 12px;
   &-title {
      padding-left: var(--gap-1);
      padding-right: var(--gap-1);
      padding-top: 12px;
      padding-bottom: 12px;
   }
   &-item {
      display: flex;
      align-items: center;
      line-height: 20px;
      padding-top: 12px;
      padding-bottom: 12px;
      padding-left: var(--gap-1);
      padding-right: var(--gap-1);
      &:hover {
         background-color: rgba(var(--c-light), 0.3);
      }
      .avatar {
         margin-right: 6px;
      }
      .btn {
         margin-left: auto;
         margin-right: 0;
      }
   }

   &-show {
      a {
         display: flex;
         padding-left: var(--gap-1);
         padding-right: var(--gap-1);
         padding-top: 12px;
         padding-bottom: 12px;
         color: rgb(var(--c-primary));
         &:hover {
            background-color: rgba(var(--c-light), 0.3);
         }
      }
   }
}
</style>
