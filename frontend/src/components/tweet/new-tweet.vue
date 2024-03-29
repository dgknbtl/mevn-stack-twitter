<script>
import InlineSvg from 'vue-inline-svg'
import BaseAvatar from '@/components/base-avatar.vue'
import BaseButton from '@/components/base-button.vue'
import {mapActions} from 'vuex'

export default {
   name: 'NewTweet',
   data() {
      return {
         tweetContent: '',
      }
   },
   mounted() {
      this.resize()
   },
   computed: {
      imgPath() {
         try {
            return require(`@/assets/images/${this.$store.state.loggedUser?.handle}.jpg`)
         } catch (e) {
            return require('@/assets/images/default-avatar.png')
         }
      },
   },
   methods: {
      ...mapActions(['createTweet']),
      resize() {
         const {textarea} = this.$refs
         textarea.style.height = textarea.scrollHeight - 10 + 'px'
      },
      async newTweet(e) {
         e.preventDefault()
         try {
            await this.createTweet(this.tweetContent)
         } catch (error) {
            console.log(error)
         }
         this.tweetContent = ''
         this.$store.commit('UPDATE_TWEET_MODAL_STATE', false)
      },
   },
   components: {
      InlineSvg,
      BaseAvatar,
      BaseButton,
   },
}
</script>

<template lang="pug">
div.tweet
   form.tweet-box
      .tweet-avatar
         a(href="/profile"): BaseAvatar(size="large" :src="imgPath")
      form.tweet-content(@submit="newTweet")
         textarea(v-model="tweetContent" class="tweet-control" name="tweet-content" maxlength="140" minlength="1" placeholder="What's happening?" resize="none"   ref="textarea" rows="1"  @focus="resize"   @keyup="resize")
         .tweet-footer
            .tweet-actions
               .tweet-action: InlineSvg(:src="require('@/assets/icons/media.svg')" width="20")
               .tweet-action: InlineSvg(:src="require('@/assets/icons/gif.svg')" width="20")
               .tweet-action: InlineSvg(:src="require('@/assets/icons/pool.svg')" width="20")
               .tweet-action: InlineSvg(:src="require('@/assets/icons/emoji.svg')" width="20")
               .tweet-action: InlineSvg(:src="require('@/assets/icons/schedule.svg')" width="20")
               
            BaseButton(tag="button" type="submit" size="btn-medium" :disabled="tweetContent === ''") Tweet
         
</template>

<style lang="postcss" scoped>
.tweet {
   padding-top: 4px;
   padding-bottom: 4px;
   border-bottom: 1px solid rgb(var(--c-light-2));
   &-box {
      padding-left: var(--gap-1);
      padding-right: var(--gap-1);
      display: flex;
   }
   &-content {
      flex: 1;
   }
   &-avatar {
      flex-basis: var(--avatar-lg);
      margin-right: var(--gap-1);
   }
   &-control {
      width: 100%;
      border: 0;
      font-size: var(--fs-lg);
      height: 50px;
      padding-top: 10px;
      padding-bottom: 10px;
      overflow: hidden;
      min-height: 80px;
      &:focus {
         outline: none;
      }
   }
   &-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 12px;
      padding-bottom: 12px;
   }
   &-actions {
      display: flex;
      align-items: center;
   }
   &-action {
      width: 36px;
      height: 36px;
      border-radius: 999px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
         fill: rgb(var(--c-primary));
      }
      &:hover {
         background-color: rgba(var(--c-primary), 0.1);
      }
   }
}
::-webkit-resizer {
   display: none;
}
</style>
