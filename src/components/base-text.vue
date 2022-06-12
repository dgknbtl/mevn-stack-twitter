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
            return ['fs-large', 'fs-medium', 'fs-small'].indexOf(value) !== -1
         },
      },
      weight: {
         default: 'normal',
         validator: function (value) {
            return (
               [
                  'fw-light',
                  'fw-regular',
                  'fw-medium',
                  'fw-semibold',
                  'fw-bold',
                  'fw-extrabold',
                  'fw-black',
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
.fs-large {
   font-size: var(--fs-lg);
}
.fs-medium {
   font-size: var(--fs-md);
}
.fs-small {
   font-size: var(--fs-sm);
}

.fw-light {
   font-weight: 300;
}
.fw-regular {
   font-weight: 400;
}
.fw-medium {
   font-weight: 500;
}
.fw-semibold {
   font-weight: 600;
}
.fw-bold {
   font-weight: 700;
}
.fw-extrabold {
   font-weight: 800;
}
</style>
