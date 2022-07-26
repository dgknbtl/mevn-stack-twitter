<script>
export default {
   name: 'BaseAvatar',
   data() {
      return {
         imgSrc: this.src,
      }
   },
   props: {
      src: {
         type: String,
         default: require('@/assets/images/default-avatar.png'),
      },
      size: {
         default: 'medium',
         validator: function (value) {
            return ['small', 'medium', 'large', 'xlarge'].indexOf(value) !== -1
         },
      },
   },
}
</script>

<template lang="pug">
figure.avatar
   img.avatar-img(:src="src" :class="size")
</template>

<style lang="postcss" scoped>
.avatar {
   border-radius: 999px;
   img {
      border-radius: inherit;
      object-fit: cover;
   }
}
.small {
   width: var(--avatar-sm);
   height: var(--avatar-sm);
}
.medium {
   width: var(--avatar-md);
   height: var(--avatar-md);
}
.large {
   width: var(--avatar-lg);
   height: var(--avatar-lg);
}
.xlarge {
   width: var(--avatar-xlg);
   height: var(--avatar-xlg);
}
</style>
