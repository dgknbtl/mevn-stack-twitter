<script>
import InlineSvg from 'vue-inline-svg'
import BaseText from '@/components/base-text.vue'
import BaseDropdown from '@/components/base-dropdown.vue'

export default {
   name: 'SidebarTrends',
   components: {
      InlineSvg,
      BaseText,
      BaseDropdown,
   },
   data() {
      return {
         trendData: [
            {
               subTitle: 'Trending in Turkey',
               title: '#sessizistila2',
               count: '32K Tweets',
            },
            {
               subTitle: 'Trending in Turkey',
               title: '#FOXTV',
               count: '3,105K Tweets',
            },
            {
               subTitle: 'Bussiness - Finance',
               title: '#dolartl',
               count: '20K Tweets',
            },
            {
               subTitle: 'Trending in Turkey',
               title: '#şirinevler',
               count: '68K Tweets',
            },
            {
               subTitle: 'Sports',
               title: '#ROSE',
               count: '11K Tweets',
            },
         ],
      }
   },
}
</script>

<template lang="pug">
.trends
   .trends-title:  BaseText(tag="span" weight="fw-bold" size="fs-large") Trends For You
   .trend(v-for="trend in trendData" :key="trend")
      .trend-subTitle: BaseText(tag="span" size="fs-small") {{trend.subTitle}}
      .trend-title: BaseText(tag="span" size="fs-medium" weight="fw-medium") {{trend.title}}
      .trend-count: BaseText(tag="span" size="fs-small") {{trend.count}}
      
      BaseDropdown(position="bottom" alignment="right")
         template(#dropdown-toggle) 
            .trend-dropdown: InlineSvg(:src="require('@/assets/icons/dot.svg')" width="18")
         template(#dropdown-nav)
            a(href="#" class="dropdown-item") Not interested in this
            a(href="#" class="dropdown-item") This trend is harmful or spammy
   .trend-show
      BaseText(tag="a" href="#" size="fs-medium" weight="fw-normal") Show More
            
</template>

<style lang="postcss" scoped>
.trends {
   background-color: rgb(var(--c-light-2));
   border-radius: 12px;
   overflow: hidden;
   &-title {
      padding-left: var(--gap-1);
      padding-right: var(--gap-1);
      padding-top: 12px;
      padding-bottom: 12px;
   }
   .trend {
      position: relative;
      padding-left: var(--gap-1);
      padding-right: var(--gap-1);
      padding-top: 12px;
      padding-bottom: 12px;
      &:hover {
         background-color: rgba(var(--c-light), 0.3);
      }
      &-subTitle,
      &-count {
         color: rgb(var(--c-gray));
      }

      .dropdown {
         position: absolute;
         top: 0;
         right: 12px;
      }
      &-dropdown {
         width: 30px;
         height: 30px;
         border-radius: 999px;
         display: flex;
         align-items: center;
         justify-content: center;
         margin-top: 10px;
         &:hover {
            background-color: rgba(var(--c-primary), 0.1);
            cursor: pointer;
            svg {
               fill: rgb(var(--c-primary));
            }
         }
      }
      &-show {
         a {
            display: flex;
            padding-left: var(--gap-1);
            padding-right: var(--gap-1);
            padding-top: 12px;
            padding-bottom: 12px;
            color: rgb(var(--c-primary));
            &:hover {
               background-color: rgba(var(--c-light), 0.3);
            }
         }
      }
   }
}
</style>
