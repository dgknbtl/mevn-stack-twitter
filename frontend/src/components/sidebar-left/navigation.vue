<script>
import InlineSvg from 'vue-inline-svg'
import BaseText from '@/components/base-text.vue'
import BaseButton from '@/components/base-button.vue'
import BaseDropdown from '@/components/base-dropdown.vue'
import {mapGetters} from 'vuex'

export default {
   name: 'SidebarNav',
   components: {
      InlineSvg,
      BaseText,
      BaseButton,
      BaseDropdown,
   },
   computed: {
      ...mapGetters(['getHandle']),
   },
}
</script>

<template lang="pug">
div
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

      BaseText(tag="a" class="sidebarNav-link"  :href="`/${getHandle}`")
         InlineSvg(:src="require('@/assets/icons/profile-fill.svg')" class="a" width="26" v-if="$route.params.handle === getHandle && ($route.name === 'profile-tweets' || $route.name === 'profile-replies' || $route.name === 'profile-likes' || $route.name === 'profile-media'   )")
         InlineSvg(:src="require('@/assets/icons/profile.svg')" width="26" v-else)
         BaseText(tag="span" size="fs-large") Profile
         
      
      BaseDropdown(position="top"  alignment="left")
         template(#dropdown-toggle) 
            div.sidebarNav-link
               InlineSvg(:src="require('@/assets/icons/more.svg')" width="26")
               BaseText(tag="span" size="fs-large") More
         template(#dropdown-nav)
            a(href="/" class="dropdown-item")
               InlineSvg(:src="require('@/assets/icons/setting.svg')" width="18")
               span Add an existing account
            a(href="/" class="dropdown-item")
               InlineSvg(:src="require('@/assets/icons/help.svg')" width="18")
               span Help Center
            a(href="/" class="dropdown-item")
               InlineSvg(:src="require('@/assets/icons/display.svg')" width="18")
               span Display
            a(href="/" class="dropdown-item")
               InlineSvg(:src="require('@/assets/icons/shortcut.svg')" width="18")
               span Keyboard Shortcuts

         
      div
         BaseButton(tag="a" href="/create/tweet") 
            span Tweet
            InlineSvg(:src="require('@/assets/icons/create-tweet.svg')" width="20")
</template>

<style lang="postcss" scoped>
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
      svg {
         width:26px;
         stroke: 1;
         fill: rgb(var(--c-black)));
      }
      @media (--d-lg){
         display: flex;
         width:50px;
         height:50px;
         span{
            display:none;
         }

      }
   }

   .btn{
      display: flex;
      align-items:center;
      justify-content:center;
      width:95%;
      margin-top:var(--gap-1);
      margin-bottom:var(--gap-1);
      box-shadow: rgb(0 0 0 / 8%) 0px 8px 28px;
      svg{
         fill:#fff;
         display:none;
      }

      @media (--d-lg){
         width: 50px;
         height:50px;
         padding:0;
         svg{
            display:block;
         }
         span{display:none;}
      }
   }
}
.router-link-active, .router-link-exact-active{
   font-weight: 700;
}
</style>
