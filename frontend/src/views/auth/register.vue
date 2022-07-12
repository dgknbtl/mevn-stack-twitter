<script>
import InlineSvg from 'vue-inline-svg'
import BaseInput from '@/components/base-input.vue'
import BaseButton from '@/components/base-button.vue'

export default {
   name: 'LoginView',
   components: {
      BaseInput,
      BaseButton,
      InlineSvg,
   },
}
</script>

<template lang="pug">
div
   RouterLink(tag="a" class="form-logo" to="/"):  InlineSvg(:src="require('@/assets/icons/twitter.svg')")
   
   .form-group
      BaseInput(type="text" size="large" placeholder="Full Name" icon="user")
   .form-group
      BaseInput(type="text" size="large" placeholder="User Name" icon="user")
   .form-group
      BaseInput(type="email" size="large" placeholder="E-mail" icon="message")
   .form-group
      BaseInput(type="password" size="large" placeholder="Password" icon="lock")
   .form-group
      BaseInput(type="password" size="large" placeholder="Confirm Password" icon="lock")
   .form-group
      BaseButton Login
   .form-footer
      RouterLink(tag="a" to="/login") Sign in to Twitter
</template>

<style lang="postcss" scoped>
.form-group {
   + .form-group {
      margin-top: 12px;
   }
}
.btn {
   width: 100%;
}
.form-footer {
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 10px 0;
   span {
      color: rgb(var(--c-dark));
      padding-left: 10px;
      padding-right: 10px;
      font-size: 12px;
   }
   a {
      font-size: 15px;
      font-weight: 500;
      color: rgb(var(--c-primary));
      &:hover {
         color: rgb(var(--c-dark));
      }
      + a {
         margin-left: 20px;
      }
   }
}

.form-logo {
   width: 50px;
   height: 50px;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0 auto 20px auto;
   svg {
      width: 28px;
      fill: rgba(var(--c-primary));
   }
   &:hover {
      background-color: rgba(var(--c-primary), 0.1);
   }
}
</style>
