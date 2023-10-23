<template>
  <span class="login-form-title">
    Ingresar
  </span>

  <form class="login-form validate-form" @submit.prevent="onSubmit">

    <div class="wrap-input validate-input" data-validate="Ingrese usuario">
      <input v-model="userForm.username" type="email" class="input-login" placeholder="Correo" required>
      <span class="focus-input-login" data-placeholder="&#xe82a;"></span>
    </div>

    <div class="wrap-input validate-input" data-validate="Ingrese contraseña">
      <input v-model="userForm.password" type="password" class="input-login" placeholder="Contraseña" required>
      <span class="focus-input-login" data-placeholder="&#xe80f;"></span>
    </div>

    <div class="container-login-form-btn">
      <button type="submit" class="login-form-btn">Entrar</button>
      <router-link :to="{ name: 'home' }" class="login-form-btn">Cancelar</router-link>
    </div>

    <div class="container-login-form-btn">
      <router-link class="login-optional" :to="{ name: 'register' }">¿No tienes cuenta?</router-link>
    </div>

  </form>
</template>

<script>
import { ref } from 'vue'

import { useRouter } from 'vue-router'

import Swal from 'sweetalert2'

import useUser from '../composables/useUser'

export default {
  setup() {
    const { loginUser } = useUser()
    const router = useRouter()

    const userForm = ref({
      username: 'andresg1006@gmail.com',
      password: 'admin1234'
    })

    return {
      userForm,
      onSubmit: async () => {
        const { ok, message } = await loginUser(userForm.value)

        if (ok) {
          router.push({ name: 'home' })
        } else {
          Swal.fire('Error', message, 'error')
        }
      }
    }
  }

}
</script>

<style lang="scss" scoped></style>