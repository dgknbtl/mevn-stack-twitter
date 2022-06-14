<script>
import InlineSvg from 'vue-inline-svg'
import BaseAvatar from '@/components/base-avatar.vue'
import BaseText from '@/components/base-text.vue'
import BaseDropdown from '@/components/base-dropdown.vue'

export default {
   name: 'BaseTweet',
   components: {
      InlineSvg,
      BaseAvatar,
      BaseText,
      BaseDropdown,
   },
   props: {
      tweetData: {
         type: Object,
         required: true,
      },
   },
   data() {},
}
</script>

<template lang="pug">
div.tweet
   .tweet-avatar
      BaseAvatar(size="large" :src="tweetData.avatar")
   .tweet-content
      .tweet-header
         div            
            RouterLink(:to="{ path: `/${tweetData.handle}` }" tag="a")
               BaseText(class="tweet-author" weight="fw-bold" tag="a") {{tweetData.author}}
            BaseText(class="tweet-handle") {{tweetData.handle}}
            BaseText  •
            RouterLink(:to="{ path: `/${tweetData.handle}/status/AGFGFB` }" tag="a")
               BaseText(class="tweet-time") {{tweetData.creaatedAt}}
         
         
         
         BaseDropdown(position="bottom" alignment="right")
            template(#dropdown-toggle) 
               .tweet-more: InlineSvg(:src="require('@/assets/icons/dot.svg')" width="18")
            template(#dropdown-nav)
               a(href="#" class="dropdown-item") Unfollow @username
               a(href="#" class="dropdown-item") Add/remove @username from lists
               a(href="#" class="dropdown-item") Mute @username 
               a(href="#" class="dropdown-item") Block @username 
               a(href="#" class="dropdown-item") Embed Tweet 
               a(href="#" class="dropdown-item") Report Tweet 



      .tweet-content
         BaseText(tag="p") {{tweetData.content}}
         figure.tweet-image(v-if="tweetData.media")
            img(:src="tweetData.media")
         .tweet-actions
            .tweet-action
               .action-icon: InlineSvg(:src="require('@/assets/icons/comment.svg')" width="18")
               BaseText(size="fs-small") {{tweetData.comment}}
            .tweet-action
               .action-icon: InlineSvg(:src="require('@/assets/icons/retweet.svg')" width="18")
               BaseText(size="fs-small") {{tweetData.retweet}}
            .tweet-action
               .action-icon: InlineSvg(:src="require('@/assets/icons/like.svg')" width="18")
               BaseText(size="fs-small") {{tweetData.likes}}
            .tweet-action
               .action-icon: InlineSvg(:src="require('@/assets/icons/share.svg')" width="18")
               

</template>

<style lang="postcss" scoped>
.tweet {
   padding: var(--gap-1);
   display: flex;
   align-items: stretch;
   border-bottom: 1px solid rgb(var(--c-light-2));
   &:hover {
      cursor: pointer;
      background-color: rgba(var(--c-light-2), 0.7);
   }
   &-avatar {
      margin-right: 12px;
   }
   &-header {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 14px;
      a:hover {
         text-decoration: underline;
      }
   }
   &-more {
      width: 30px;
      height: 30px;
      border-radius: 999px;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
         background-color: rgba(var(--c-primary), 0.1);
         svg {
            fill: rgb(var(--c-primary));
         }
      }
   }
   span {
      color: rgb(var(--c-gray));
   }
   &-handle {
      padding-left: 6px;
      padding-right: 6px;
   }
   &-time {
      padding-left: 4px;
   }
   &-content {
      line-height: 20px;
   }
   &-image {
      border-radius: 15px;
      border: 1px solid rgb(var(--c-light));
      margin-top: var(--gap-1);
      img {
         border-radius: inherit;
      }
   }
   &-actions {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 425px;
      margin-top: 12px;
      .tweet-action {
         display: flex;
         align-items: center;
         margin-left: -5px;
         .action-icon {
            width: 30px;
            height: 30px;
            border-radius: 999px;
            display: flex;
            align-items: center;
            justify-content: center;
         }
         span {
            padding-left: 4px;
         }
         svg {
            fill: rgb(var(--c-gray));
         }
         &:hover {
            .action-icon {
               background-color: rgba(var(--c-primary), 0.1);
            }
            svg {
               fill: rgb(var(--c-primary));
            }
         }
         &:nth-child(1) {
            &:hover {
               span {
                  color: rgb(var(--c-primary));
               }
               .action-icon {
                  background-color: rgba(var(--c-primary), 0.1);
               }
               svg {
                  fill: rgb(var(--c-primary));
               }
            }
         }
         &:nth-child(2) {
            &:hover {
               span {
                  color: rgb(var(--c-green));
               }
               .action-icon {
                  background-color: rgba(var(--c-green), 0.1);
               }
               svg {
                  fill: rgb(var(--c-green));
               }
            }
         }
         &:nth-child(3) {
            &:hover {
               span {
                  color: rgb(var(--c-red));
               }
               .action-icon {
                  background-color: rgba(var(--c-red), 0.1);
               }
               svg {
                  fill: rgb(var(--c-red));
               }
            }
         }
      }
   }
}
</style>
