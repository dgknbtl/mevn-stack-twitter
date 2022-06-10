<script>
export default {
   name: 'BaseText',
   props: {
      tag: {
         default: 'span',
      },
      size: {
         default: 'medium',
         validator: function (value) {
            return ['large', 'medium', 'small'].indexOf(value) !== -1
         },
      },
      weight: {
         default: '400',
         validator: function (value) {
            return (
               [
                  'light',
                  'regular',
                  'medium',
                  'semibold',
                  'bold',
                  'extrabold',
                  'black',
               ].indexOf(value) !== -1
            )
         },
      },
   },
}
</script>

<template lang="pug">
component(:is="tag" :class="[size, weight]")
   slot
</template>

<style lang="postcss" scoped>
.large {
   font-size: var(--fs-lg);
}
.medium {
   font-size: var(--fs-md);
}
.small {
   font-size: var(--fs-sm);
}

.light {
   font-weight: 300;
}
.regular {
   font-weight: 400;
}
.medium {
   font-weight: 500;
}
.semibold {
   font-weight: 600;
}
.bold {
   font-weight: 700;
}
.extrabold {
   font-weight: 800;
}
</style>
