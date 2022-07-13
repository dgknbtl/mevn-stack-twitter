<script>
import BaseText from '@/components/base-text'

export default {
   name: 'BaseDropdown',
   components: {
      BaseText,
   },
   data() {
      return {
         isDropdownShow: false,
      }
   },
   props: {
      position: {
         type: String,
         default: 'bottom',
         validator(value) {
            return ['top', 'bottom'].includes(value)
         },
      },
      alignment: {
         type: String,
         default: 'left',
         validator(value) {
            return ['left', 'right'].includes(value)
         },
      },
   },
   methods: {
      toggleDropdown() {
         this.isDropdownShow = !this.isDropdownShow
      },
      closeDropdown(e) {
         if (!this.$el.contains(e.target)) {
            this.isDropdownShow = false
         }
      },
   },

   mounted() {
      document.addEventListener('click', this.closeDropdown)
   },
   beforeUnmount() {
      document.removeEventListener('click', this.closeDropdown)
   },
}
</script>

<template lang="pug">
.dropdown(:class="[position,alignment]")
   .dropdown-toggle(@click="toggleDropdown"): slot(name="dropdown-toggle")
   .dropdown-menu(v-if="isDropdownShow")
      .dropdown-nav
         slot(name="dropdown-nav")
</template>

<style lang="postcss" scoped>
.dropdown {
   position: relative;
   &-toggle {
      cursor: pointer;
   }
   &-menu {
      position: absolute;
      box-shadow: rgb(101 119 134 / 20%) 0px 0px 15px,
         rgb(101 119 134 / 15%) 0px 0px 3px 1px;
      width: 290px;
      background-color: #fff;
      min-height: 100px;
      border-radius: 15px;
      z-index: 90;
      &::after {
         content: '';
         position: absolute;
         top: -8px;
         display: inline-block;
         width: 0;
         height: 0;
         border-style: solid;
         border-width: 0 6px 8px 6px;
         border-color: transparent transparent #fff transparent;
         -webkit-filter: drop-shadow(0px -2px 1px rgba(0, 0, 0, 0.15));
         filter: drop-shadow(0px -2px 1px rgba(0, 0, 0, 0.15));
      }
   }
   &.left {
      .dropdown-menu {
         left: 0;
         &::after {
            left: var(--gap-1);
         }
      }
   }
   &.right {
      .dropdown-menu {
         right: -12px;
         &::after {
            right: var(--gap-1);
         }
      }
   }
   &.bottom {
      .dropdown-menu {
         top: 100%;
         margin-top: var(--gap-1);
      }
   }

   &.top {
      .dropdown-menu {
         bottom: 100%;
         margin-bottom: var(--gap-1);
         &::after {
            transform: rotateX(180deg);
            top: auto;
            bottom: -8px;
         }
      }
   }
   .dropdown-nav {
      display: flex;
      flex-direction: column;
   }

   &::v-deep {
      .dropdown-nav {
         .dropdown-item {
            text-decoration: none;
            display: flex;
            align-items: center;
            &:first-child {
               border-top-left-radius: 15px;
               border-top-right-radius: 15px;
            }
            &:last-child {
               border-bottom-left-radius: 15px;
               border-bottom-right-radius: 15px;
            }
            display: flex;
            align-items: center;
            height: 50px;
            padding-left: var(--gap-1);
            padding-right: var(--gap-1);
            &:hover {
               background-color: rgb(var(--c-light-2));
            }
            svg {
               width: 18px;
               fill: rgb(var(--c-dark));
               margin-right: 6px;
            }
         }
      }
   }
}
</style>
