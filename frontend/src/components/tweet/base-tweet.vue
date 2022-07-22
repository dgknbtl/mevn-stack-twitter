<script>
import InlineSvg from 'vue-inline-svg'
import BaseAvatar from '@/components/base-avatar.vue'
import BaseText from '@/components/base-text.vue'
import BaseDropdown from '@/components/base-dropdown.vue'
import BaseTweet from '@/components/tweet/base-tweet.vue'
import {mapActions} from 'vuex'

export default {
   name: 'BaseTweet',
   components: {
      InlineSvg,
      BaseAvatar,
      BaseText,
      BaseDropdown,
      BaseTweet,
   },
   data() {},
   props: {
      id: {
         type: String,
      },
      author: {
         type: [Object, Array],
      },
      createdAt: {
         type: String,
      },
      content: {
         type: String,
      },
      replies: {
         type: Number,
      },
      retweets: {
         type: Number,
      },
      likes: {
         type: Number,
      },
      originalTweet: {
         type: [Object, Array],
      },
      isQuoteRetweet: {},
      isSimpleRetweet: {},
      retweetAuthor: {},
   },
   computed: {
      formatCreatedAt() {
         let options = {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            minute: '2-digit',
            hour: '2-digit',
         }
         const date = new Date(this.createdAt)
         const formattedDate = date.toLocaleDateString('en-US', options)
         return formattedDate
      },
      checkIsMy() {
         return this.$store.state.loggedUser?.tweets.some((t) => t._id == this.id)
      },
      checkIsLiked() {
         return this.$store.state.loggedUser?.likes.some((t) => t._id == this.id)
      },
   },
   created() {
      if (!this.author) return
      return this.checkIsLiked ? true : false
   },
   methods: {
      ...mapActions(['like', 'unlike', 'fetchTweet', 'fetchUser', 'removeTweet']),
      async likeTweet(id) {
         await this.like(id)
         await this.updateTweetLikes()
      },
      async unlikeTweet(id) {
         await this.unlike(id)
         await this.updateTweetLikes()
      },
      async updateTweetLikes() {
         await this.fetchUser(
            this.$route.params.handle
               ? this.$route.params.handle
               : this.$store.state.loggedUser.handle
         )
      },
      async deleteTweet(id) {
         await this.removeTweet(id)
      },
   },
}
</script>

<template lang="pug">
div.tweet-box
   div(v-if="isSimpleRetweet" class="retweet-author")
      InlineSvg(:src="require('@/assets/icons/retweet.svg')" width="14")
      BaseText(size="fs-small" weight="fw-semibold") {{retweetAuthor.name}} retweeted
   .tweet
      .tweet-avatar
         BaseAvatar(size="large")
      div.tweet-inner
         .tweet-header
            div            
               BaseText(:href="`/${author.handle}`" class="tweet-author" weight="fw-bold" tag="a") {{author.name}}
               BaseText(class="tweet-handle") @{{author.handle}}
               BaseText  •
               RouterLink(to="/" tag="a")
                  BaseText(class="tweet-time")  {{formatCreatedAt}}
            
            
            
            BaseDropdown(position="bottom" alignment="right")
               template(#dropdown-toggle) 
                  .tweet-more: InlineSvg(:src="require('@/assets/icons/dot.svg')" width="18")
               template(#dropdown-nav)
                  a(href="#" class="dropdown-item delete-item" v-if="checkIsMy" @click="deleteTweet(id)") Delete Tweet
                  div(v-else)
                     a(href="#" class="dropdown-item") Mute @{{author.handle}} 
                     a(href="#" class="dropdown-item") Block @{{author.handle}} 
                  a(href="#" class="dropdown-item") Add/remove @{{author.handle}} from lists
                  a(href="#" class="dropdown-item") Embed Tweet 
                  a(href="#" class="dropdown-item") Report Tweet 



         .tweet-content
            BaseText(tag="p") {{content}}
            figure.tweet-image(v-if="attachment")
               img()
            BaseTweet( 
               v-if='originalTweet',
               :id="originalTweet._id"         
               :author="originalTweet.author"
               :createdAt="originalTweet.createdAt"
               :content="originalTweet.content"
               :attachment="originalTweet.attachment"
               :replies="originalTweet.replies.length"
               :retweets="originalTweet.retweets.length"
               :likes="originalTweet.likes.length"
               :isQuoteRetweet="content && !!originalTweet")

            div(v-if='originalTweet === null && author.retweets.length' class="tweet-unavaible") Tweet is unavaible.
            .tweet-actions(v-if="!isQuoteRetweet")
               .tweet-action
                  .action-icon: InlineSvg(:src="require('@/assets/icons/comment.svg')" width="18")
                  BaseText(size="fs-small" v-if="replies") {{replies}}
               
               .tweet-action
                  .action-icon: InlineSvg(:src="require('@/assets/icons/retweet.svg')" width="18")
                  BaseText(size="fs-small" v-if="retweets") {{retweets}}
               
               .tweet-action(@click="!checkIsLiked ? likeTweet(id) : unlikeTweet(id)" :class="checkIsLiked ? 'liked' : ''")
                  .action-icon 
                     InlineSvg(:src="require('@/assets/icons/like.svg')" width="18" v-if="!checkIsLiked")
                     InlineSvg(:src="require('@/assets/icons/like-fill.svg')" width="18" v-else)
                  BaseText(size="fs-small" v-if="likes") {{likes}}
               
               .tweet-action
                  .action-icon: InlineSvg(:src="require('@/assets/icons/share.svg')" width="18")

</template>

<style lang="postcss" scoped>
.tweet {
   display: flex;
   align-items: stretch;
   &-box {
      padding: var(--gap-1);
      border-bottom: 1px solid rgb(var(--c-light-2));
      &:hover {
         cursor: pointer;
         background-color: rgba(var(--c-light-2), 0.7);
      }
   }
   &-avatar {
      margin-right: 12px;
   }
   &-inner {
      flex: 1;
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
      flex: 1;
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
         min-width: 42px;
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

         &.liked {
            span {
               color: rgb(var(--c-red)) !important;
            }
            .action-icon {
               svg {
                  fill: rgb(var(--c-red));
               }
            }
         }
      }
   }
   .delete-item {
      color: rgb(var(--c-red));
   }
   &-unavaible {
      padding: var(--gap-1);
      border-radius: 9px;
      border: 1px solid rgb(var(--c-light), 0.5);
      background-color: rgb(var(--c-light), 0.2);
      margin-top: 10px;
      color: rgb(var(--c-gray));
   }
}

.retweet-author {
   padding: 4px var(--gap-1);
   color: rgb(var(--c-gray));
   display: flex;
   align-items: center;
   margin-left: 38px;
   svg {
      margin-right: 8px;
      fill: rgb(var(--c-gray));
   }
}
</style>
