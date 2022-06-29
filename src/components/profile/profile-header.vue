<script>
import InlineSvg from 'vue-inline-svg'
import BaseText from '@/components/base-text.vue'
import BaseAvatar from '@/components/base-avatar.vue'
import BaseHeading from '@/components/base-heading.vue'

export default {
   name: 'ProfileHeader',
   components: {
      InlineSvg,
      BaseText,
      BaseAvatar,
      BaseHeading,
   },
}
</script>

<template lang="pug">
.profileHeader
   RouterLink(tag="a" to="/"): BaseHeading(title="Doğukan Batal" subTitle="700 Tweets" icon="arrow-left" iconPosition="left" @icon-action="someEvent" class="heading")
   figure.profileHeader-cover: img
   .profileHeader-content
      BaseAvatar(size="xlarge" class="user-avatar" src="https://pbs.twimg.com/profile_images/1534871110856081410/ihb2cTGs_400x400.jpg")
      div.user-name
         BaseText(tag="div" size="fs-large" weight="fw-bold") Doğukan Batal
         BaseText(tag="div" size="fs-medium" class="handle") @dogukanbatal
      BaseText(tag="div" size="fs-medium" class="bio") Frontend Developer, UI Designer
      div.user-info
         .info-item
            InlineSvg(:src="require(`@/assets/icons/link.svg`)" width="18" fill="black")
            BaseText(tag="a" href="#") https://dogu.dev
         .info-item
            InlineSvg(:src="require(`@/assets/icons/calendar.svg`)" width="18" fill="black")
            BaseText(tag="span") Joined January 2014
      div.user-stats
         BaseText(tag="a" size="fs-small") 
            strong 83 
            span Following
         BaseText(tag="a" size="fs-small") 
            strong 145 
            span Followers
      
      
   br
   br
   br
   br
</template>

<style lang="postcss" scoped>
.profileHeader {
   &-cover {
      width: 100%;
      height: 200px;
      background-color: rgb(var(--c-light));
   }

   &-content {
      padding: var(--gap-1);
      margin-top: -15%;
      .user-avatar {
         display: inline-flex;
         border: 4px solid #fff;
         margin-bottom: 12px;
         min-width: 48px;
      }
      .user-name {
         margin-top: 4px;
         margin-bottom: 12px;
      }
      .user-info {
         display: flex;
         align-items: center;
         margin-top: 8px;
         margin-bottom: 8px;
         .info-item {
            display: flex;
            align-items: center;
            color: rgb(var(--c-gray));
            + .info-item {
               margin-left: var(--gap-1);
            }
            a {
               color: rgb(var(--c-primary));
            }
            svg {
               fill: rgb(var(--c-gray));
               margin-right: 4px;
            }
         }
      }
      .user-stats {
         strong {
            font-weight: 600;
         }
         a + a {
            margin-left: var(--gap-1);
         }
         a:hover {
            text-decoration: underline;
         }
         span {
            color: rgb(var(--c-gray));
         }
      }
      .handle {
         color: rgb(var(--c-gray));
      }
   }
}
</style>
