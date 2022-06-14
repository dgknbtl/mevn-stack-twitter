<script>
import InlineSvg from 'vue-inline-svg'
import BaseAvatar from '@/components/base-avatar.vue'
import BaseText from '@/components/base-text.vue'
import BaseDropdown from '@/components/base-dropdown.vue'

export default {
   name: 'SidebarProfile',
   components: {
      InlineSvg,
      BaseAvatar,
      BaseText,
      BaseDropdown,
   },
}
</script>

<template lang="pug">
BaseDropdown(position="top")
   template(#dropdown-toggle) 
      .more
         .more-avatar: BaseAvatar
         div
            BaseText(class="more-user" weight="fw-bold") Doğukan Batal
            .more-handle @dogukanbatal
         InlineSvg(:src="require('@/assets/icons/dot.svg')" width="18")

   template(#dropdown-nav)
      a(href="/" class="dropdown-item") Add an existing account
      a(href="/" class="dropdown-item") Logout @dogukanbatal
</template>

<style lang="postcss" scoped>
.more {
   position: relative;
   display: flex;
   align-items: center;
   padding: 12px;
   border-radius: 999px;
   margin-top: var(--gap-1);
   margin-bottom: var(--gap-1);
   cursor: pointer;
   &:hover {
      background-color: rgb(var(--c-light-2));
   }
   &-avatar {
      margin-right: 12px;
   }
   svg {
      margin-left: auto;
      margin-right: 0;
   }
}
</style>
