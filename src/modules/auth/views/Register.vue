<template>
  <span class="login-form-title">
    Registro
  </span>

  <form class="login-form validate-form" @submit.prevent="onSubmit">

    <div class="wrap-input validate-input" data-validate="Ingrese correo">
      <input v-model="userForm.username" type="email" class="input-login" placeholder="Correo" required>
      <span class="focus-input-login" data-placeholder="&#xe818;"></span>
    </div>

    <div class="wrap-input validate-input" data-validate="Ingrese contraseña">
      <input v-model="userForm.password" type="password" class="input-login" placeholder="Contraseña" required>
      <span class="focus-input-login" data-placeholder="&#xe80f;"></span>
    </div>

    <div class="wrap-input validate-input" data-validate="Confirme contraseña">
      <input v-model="userForm.confirmPassword" type="password" class="input-login" placeholder="Confirme contraseña"
        required>
      <span class="focus-input-login" data-placeholder="&#xe80f;"></span>
    </div>

    <div class="container-login-form-btn">
      <button type="submit" class="login-form-btn">
        Crear cuenta
      </button>
    </div>

    <div class="container-login-form-btn">
      <router-link class="login-optional" :to="{ name: 'login' }">¿Ya tienes cuenta?</router-link>
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
    const { createUser } = useUser()
    const router = useRouter()

    const userForm = ref({
      username: '',
      password: '',
      confirmPassword: ''
    })

    return {
      userForm,
      onSubmit: async () => {

        if (userForm.value.password === userForm.value.confirmPassword) {
          const { ok, message } = await createUser(userForm.value)

          console.log(ok)
          console.log(message)

          if (ok) {
            router.push({ name: 'login' })
          } else {
            Swal.fire('Error', message, 'error')
          }
        } else {
          Swal.fire('Error', 'Contraseña y confirmar contraseña deben ser iguales', 'error')
        }


      }
    }
  }
}
</script>

<style lang="scss" scoped></style>