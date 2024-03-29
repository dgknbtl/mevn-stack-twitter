<script>
import InlineSvg from 'vue-inline-svg'
import BaseText from '@/components/base-text.vue'
import BaseAvatar from '@/components/base-avatar.vue'
import BaseHeading from '@/components/base-heading.vue'
import BaseButton from '@/components/base-button.vue'
import BaseModal from '@/components/base-modal.vue'
import {mapState, mapActions} from 'vuex'

export default {
   name: 'ProfileHeader',
   components: {
      InlineSvg,
      BaseText,
      BaseAvatar,
      BaseHeading,
      BaseButton,
      BaseModal,
   },
   data() {
      return {
         isFollowed: null,
         isEditProfileModalOpen: false,
      }
   },
   props: {
      searchedUser: {},
      error: {
         type: Boolean,
      },
   },
   computed: {
      ...mapState(['loggedUser']),
      createdAt() {
         var options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
         const {createdAt} = this.searchedUser
         const date = new Date(createdAt)
         const formattedDate = date.toLocaleDateString('en-US', options)
         return formattedDate
      },
      imgPath() {
         try {
            return require(`@/assets/images/${this.searchedUser?.handle}.jpg`)
         } catch (e) {
            return require('@/assets/images/default-avatar.png')
         }
      },
   },
   created() {
      if (!this.searchedUser) return
      this.isUserFollowed()
   },
   methods: {
      ...mapActions(['follow', 'unfollow', 'fetchUser']),
      async followUser(id) {
         await this.follow(id)
         await this.fetchUser(this.searchedUser.handle)
         this.isFollowed = true
      },
      async unfollowUser(id) {
         await this.unfollow(id)
         await this.fetchUser(this.searchedUser.handle)
         this.isFollowed = false
      },
      isUserFollowed() {
         if (this.loggedUser.following.some((u) => u._id == this.searchedUser._id)) {
            this.isFollowed = true
         } else {
            this.isFollowed = false
         }
      },
      editProfileSave() {},
   },
}
</script>

<template lang="pug">
.profileHeader
   RouterLink(tag="a" to="/"): BaseHeading(:title="!searchedUser ? 'Profile' : searchedUser.name" :subTitle="!searchedUser ? '' : searchedUser.tweets.length + ' Tweets'" icon="arrow-left" iconPosition="left"  class="heading")
   figure.profileHeader-cover: img
   .profileHeader-content
      BaseAvatar(size="xlarge" class="user-avatar" :src="imgPath")
      
      div(class="btn-group" v-if="searchedUser")
         div(v-if="searchedUser.handle !== this.$store.state.loggedUser.handle")
            BaseButton(tag="button" size="btn-medium" :color="isFollowed ? 'btn-dark' : 'btn-outline'"  @click="isFollowed ? unfollowUser(searchedUser._id) : followUser(searchedUser._id)") {{isFollowed ? 'Following' : 'Follow'}}
         
         BaseButton(tag="a" size="btn-medium" color="btn-outline" @click="isEditProfileModalOpen = true" v-else) Edit Profile
         
      div.user-name
         BaseText(tag="div" size="fs-large" weight="fw-bold") {{!searchedUser ? '@' + this.$route.params.handle : searchedUser.name}}
         BaseText(tag="div" size="fs-medium" class="handle" v-if="searchedUser") @{{searchedUser.handle}}
         
         div.user-info(v-if="searchedUser")
            BaseText(tag="div" size="fs-medium" class="bio") {{searchedUser.bio}}
            .info-item(v-if="searchedUser.website")
               InlineSvg(:src="require(`@/assets/icons/link.svg`)" width="18" fill="black")
               BaseText(tag="a" href="#") {{searchedUser.website}}
            .info-item
               InlineSvg(:src="require(`@/assets/icons/calendar.svg`)" width="18" fill="black")
               BaseText(tag="span") Joined {{createdAt}}
         div.user-stats(v-if="searchedUser")
            BaseText(tag="a" size="fs-medium") 
               strong {{searchedUser.following.length}} 
               span  Following
            BaseText(tag="a" size="fs-medium") 
               strong {{searchedUser.followers.length}}
               span  Followers
   
   BaseModal(title="Edit Profile"  :button="true"  :isModalOpen="isEditProfileModalOpen" @modal-close="isEditProfileModalOpen=false" @button-event="editProfileSave")
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
