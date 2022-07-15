<script>
import InlineSvg from 'vue-inline-svg'
import BaseInput from '@/components/base-input.vue'
import BaseButton from '@/components/base-button.vue'
import BaseText from '@/components/base-text.vue'
import {mapActions} from 'vuex'

export default {
   name: 'RegisterView',
   components: {
      InlineSvg,
      BaseInput,
      BaseButton,
      BaseText,
   },
   data() {
      return {
         errorMessage: null,
         infoMessage: null,
         loading: false,
         name: '',
         handle: '',
         email: '',
         password: '',
         confirmPassword: '',
      }
   },
   methods: {
      ...mapActions(['register']),
      async registerUser(e) {
         e.preventDefault()
         try {
            if (
               !(
                  this.name &&
                  this.handle &&
                  this.email &&
                  this.password &&
                  this.confirmPassword
               )
            ) {
               this.errorMessage = 'All fields is required.'
            }

            const response = await this.register({
               name: this.name,
               handle: this.handle,
               email: this.email,
               password: this.password,
               confirmPassword: this.confirmPassword,
            })
            this.infoMessage = response.data.message
            setTimeout(async () => {
               await this.$router.push('/login')
            }, 1200)
         } catch (error) {
            this.errorMessage = error.response.data
         }
      },
   },
}
</script>

<template lang="pug">
div
   RouterLink(tag="a" class="form-logo" to="/"):  InlineSvg(:src="require('@/assets/icons/twitter.svg')")
   BaseText(class="error-message text-green" size="fs-small" weight="fw-medium" v-if="infoMessage") {{infoMessage}}
   BaseText(class="error-message text-red" size="fs-small" weight="fw-medium" v-if="errorMessage") 
      div(v-for="err in errorMessage") {{err.body}}
   form(@submit="registerUser")
      .form-group
         BaseInput(type="text" v-model="name" name="name" size="large" placeholder="Full Name" icon="user")
      .form-group
         BaseInput(type="text" v-model="handle" name="handle" size="large" placeholder="User Name" icon="user")
      .form-group
         BaseInput(type="email" v-model="email" name="email" size="large" placeholder="E-mail" icon="message")
      .form-group
         BaseInput(type="password" v-model="password" name="password" size="large" placeholder="Password" icon="lock")
      .form-group
         BaseInput(type="password" v-model="confirmPassword" name="confirmPassword" size="large" placeholder="Confirm Password" icon="lock")
      .form-group
         BaseButton Register
   .form-footer
      RouterLink(tag="a" to="/login") Sign in to Twitter
</template>

<style lang="postcss" scoped>
.error-message {
   display: block;
   margin: auto;
   text-align: center;
   margin-bottom: 14px;
}
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
