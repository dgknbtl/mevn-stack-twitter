<script>
import InlineSvg from 'vue-inline-svg'
import BaseText from '@/components/base-text.vue'
import BaseButton from '@/components/base-button.vue'

export default {
   name: 'SidebarLeft',
   components: {
      InlineSvg,
      BaseText,
      BaseButton,
   },
   data() {
      return {
         username: 'dogukanbatal',
      }
   },
}
</script>

<template lang="pug">
div.sidebar
   RouterLink(tag="a" class="sidebar-logo" to="/"):  InlineSvg(:src="require('@/assets/icons/twitter.svg')")
   nav.sidebarNav
      RouterLink(tag="a" class="sidebarNav-link" to="/")
         InlineSvg(:src="require('@/assets/icons/home-fill.svg')" width="26" v-if="$route.name === 'home'")
         InlineSvg(:src="require('@/assets/icons/home.svg')" width="26" v-else)
         BaseText(tag="span" size="fs-large") Home

      RouterLink(tag="a" class="sidebarNav-link" to="/explore")
         InlineSvg(:src="require('@/assets/icons/explore-fill.svg')" width="26" v-if="$route.name === 'explore'")
         InlineSvg(:src="require('@/assets/icons/explore.svg')" width="26" v-else)
         BaseText(tag="span" size="fs-large") Explore
         
      RouterLink(tag="a" class="sidebarNav-link" to="/notifications")
         InlineSvg(:src="require('@/assets/icons/notification-fill.svg')" width="26" v-if="$route.name === 'notifications'")
         InlineSvg(:src="require('@/assets/icons/notification.svg')" width="26" v-else)
         BaseText(tag="span" size="fs-large") Notifications

      RouterLink(tag="a" class="sidebarNav-link" to="/messages")
         InlineSvg(:src="require('@/assets/icons/message-fill.svg')" width="26" v-if="$route.name === 'messages'")
         InlineSvg(:src="require('@/assets/icons/message.svg')" width="26" v-else)
         BaseText(tag="span" size="fs-large") Messages

      RouterLink(tag="a" class="sidebarNav-link" to="/bookmarks")
         InlineSvg(:src="require('@/assets/icons/bookmark-fill.svg')" width="26" v-if="$route.name === 'bookmarks'")
         InlineSvg(:src="require('@/assets/icons/bookmark.svg')" width="26" v-else)
         BaseText(tag="span" size="fs-large") Bookmarks

      RouterLink(tag="a" class="sidebarNav-link" to="/lists")
         InlineSvg(:src="require('@/assets/icons/list-fill.svg')" width="26" v-if="$route.name === 'lists'")
         InlineSvg(:src="require('@/assets/icons/list.svg')" width="26" v-else)
         BaseText(tag="span" size="fs-large") Lists

      RouterLink(tag="a" class="sidebarNav-link" :to="{ path: `/${username}` }")
         InlineSvg(:src="require('@/assets/icons/profile-fill.svg')" class="a" width="26" v-if="$route.name === 'profile-tweets' || $route.name === 'profile-replies' || $route.name === 'profile-likes' || $route.name === 'profile-media'   ")
         InlineSvg(:src="require('@/assets/icons/profile.svg')" class="b" width="26" v-else)
         BaseText(tag="span" size="fs-large") Profile
         
      RouterLink(tag="a" class="sidebarNav-link" to="/more")
         InlineSvg(:src="require('@/assets/icons/more.svg')" width="26")
         BaseText(tag="span" size="fs-large") More

         
      div: BaseButton(tag="a" href="/create/tweet") Tweet

      
</template>

<style lang="postcss" scoped>
.sidebar{
   padding-left: var(--gap-1);
   padding-right: var(--gap-1);
   &-logo{
      width:50px;
      height:50px;
      border-radius:50%;
      display: flex;
      align-items:center;
      justify-content:center;
      margin:2px;
      svg{
         width:28px;
         fill: rgba(var(--c-primary));
      }
      &:hover{
         background-color: rgba(var(--c-primary),.1);
      }
   }
}
.sidebarNav {
   &-link {
      padding: 12px;
      border-radius: 999px;
      display: inline-flex;
      align-items: center;
      margin-top:4px;
      margin-bottom:4px;
      &:hover {
         background-color: rgb(var(--c-light-2));
      }
      span {
         margin: 0 20px;
      }
      &.router-link-active {
         font-weight: 700;
      }
      svg {
         width:26px;
         stroke: 1;
         fill: rgb(var(--c-black)));
      }
   }

   .btn{display: flex; width:95%; margin-top:var(--gap-1); margin-bottom:var(--gap-1);  box-shadow: rgb(0 0 0 / 8%) 0px 8px 28px;}
}
</style>
