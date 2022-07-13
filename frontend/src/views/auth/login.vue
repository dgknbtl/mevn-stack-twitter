<script>
import InlineSvg from 'vue-inline-svg'
import BaseInput from '@/components/base-input.vue'
import BaseButton from '@/components/base-button.vue'
import BaseText from '@/components/base-text.vue'
import {mapActions} from 'vuex'

export default {
   name: 'LoginView',
   components: {
      InlineSvg,
      BaseInput,
      BaseButton,
      BaseText,
   },
   data() {
      return {
         error: null,
         loading: false,
         email: '',
         password: '',
      }
   },
   methods: {
      ...mapActions(['authenticate']),
      async login(e) {
         e.preventDefault()
         try {
            await this.authenticate({
               email: this.email,
               password: this.password,
            })
            this.$router.push('/')
         } catch (error) {
            this.error = error.response.data.message
         }
         this.email = ''
         this.password = ''
      },
   },
}
</script>

<template lang="pug">
div
   RouterLink(tag="a" class="form-logo" to="/"):  InlineSvg(:src="require('@/assets/icons/twitter.svg')")
   BaseText(class="error-message" size="fs-small" weight="fw-medium" v-if="error") {{error}}
   form(@submit="login")
      .form-group
         BaseInput(type="email" v-model="email" name="email" size="large" placeholder="E-mail" icon="message")
      .form-group
         BaseInput(type="password" v-model="password" name="password" size="large" placeholder="Password" icon="lock")
      .form-group
         BaseButton() Login
      .form-footer
         RouterLink(tag="a" to="") Forgot password?
         span •
         RouterLink(tag="a" to="/register") Sign up for Twitter
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
.error-message {
   display: block;
   color: red;
   margin: auto;
   text-align: center;
   margin-bottom: 14px;
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
      font-size: 14px;
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
