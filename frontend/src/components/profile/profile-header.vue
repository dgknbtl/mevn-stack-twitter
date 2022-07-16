<script>
import InlineSvg from 'vue-inline-svg'
import BaseText from '@/components/base-text.vue'
import BaseAvatar from '@/components/base-avatar.vue'
import BaseHeading from '@/components/base-heading.vue'
import BaseButton from '@/components/base-button.vue'

export default {
   name: 'ProfileHeader',
   components: {
      InlineSvg,
      BaseText,
      BaseAvatar,
      BaseHeading,
      BaseButton,
   },
   props: ['currentUser', 'error'],
   computed: {
      createdAt() {
         var options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
         const {createdAt} = this.currentUser
         const date = new Date(createdAt)
         const formattedDate = date.toLocaleDateString('en-US', options)
         return formattedDate
      },
   },
}
</script>

<template lang="pug">
.profileHeader
   RouterLink(tag="a" to="/"): BaseHeading(:title="error ? 'Profile' : currentUser.name" :subTitle="error ? '' : currentUser.tweets.length + ' Tweets'" icon="arrow-left" iconPosition="left" @icon-action="someEvent" class="heading")
   figure.profileHeader-cover: img
   .profileHeader-content
      BaseAvatar(size="xlarge" class="user-avatar" src="https://pbs.twimg.com/profile_images/1544667412120879104/Z4vKdOuy_400x400.jpg")

      div(class="btn-group" v-if="!error")
         BaseButton(tag="a" size="btn-medium" color="btn-outline" href="/settings" v-if="this.$route.params.handle !== this.currentUserHandle") Edit Profile
      div.user-name
         BaseText(tag="div" size="fs-large" weight="fw-bold") {{error ? '@' + this.$route.params.handle : currentUser.name}}
         BaseText(tag="div" size="fs-medium" class="handle" v-if="!error") @{{currentUser.handle}}
      BaseText(tag="div" size="fs-medium" class="bio" v-if="currentUser.bio || !error") {{currentUser.bio}}
      div.user-info(v-if="!error")
         .info-item(v-if="currentUser.website")
            InlineSvg(:src="require(`@/assets/icons/link.svg`)" width="18" fill="black")
            BaseText(tag="a" href="#") {{currentUser.website}}
         .info-item
            InlineSvg(:src="require(`@/assets/icons/calendar.svg`)" width="18" fill="black")
            BaseText(tag="span") Joined {{createdAt}}
      div.user-stats(v-if="!error")
         BaseText(tag="a" size="fs-medium") 
            strong {{currentUser.following.length}} 
            span  Following
         BaseText(tag="a" size="fs-medium") 
            strong {{currentUser.followers.length}}
            span  Followers
</template>

<style lang="postcss" scoped>
.profileHeader {
   &-cover {
      width: 100%;
      height: 200px;
      background-color: rgb(var(--c-light));
   }

   &-content {
      position: relative;
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

   .btn-group {
      position: absolute;
      top: var(--gap-1);
      right: var(--gap-1);
      margin-top: 15%;
   }
}
</style>
