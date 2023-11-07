<template>
  <nav class="navbar navbar-expand-md bg-body-tertiarity" data-bs-theme="light">
    <div class="container d-flex">

      <router-link :to="{ name: 'home' }" class="navbar-brand">
        <img class="logo" src="@/assets/img/logo.png" alt="">
      </router-link>

      <button class="navbar-toggler collapsed d-flex d-md-none flex-column justify-content-around" type="button"
        data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="toggler-icon top-bar"></span>
        <span class="toggler-icon middle-bar"></span>
        <span class="toggler-icon bottom-bar"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item mx-5"><router-link class="nav-link" :to="{ name: 'home' }">Inicio</router-link></li>
          <li class="nav-item mx-5"><router-link class="nav-link" :to="{ name: 'promotions' }">Promociones</router-link>
          </li>
          <li class="nav-item mx-5"><router-link class="nav-link" :to="{ name: 'store' }">Tienda</router-link></li>
        </ul>
        <ul class="navbar-nav mx-5">
          <template v-if="isLogged">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa fa-user"></i> Mi Cuenta
              </a>
              <ul class="dropdown-menu">
                <template v-if="isAdmin">
                  <li><router-link class="dropdown-item" :to="{ name: 'home-console' }">Consola</router-link></li>
                </template>
                <li><router-link class="dropdown-item" to="{name: 'my-account' }">Cuenta </router-link></li>
                <li><router-link class="dropdown-item" to="{name: 'following' }">Siguiendo </router-link></li>
                <li><router-link class="dropdown-item" to="{name: 'shopping-cart' }">Carrito </router-link></li>
                <li><a class="dropdown-item" @click="logOut">Salir </a></li>
              </ul>
            </li>
          </template>
          <template v-else>
            <li class="nav-item"><router-link class="nav-link" :to="{ name: 'login' }">Iniciar sesión</router-link></li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import useUser from '../modules/auth/composables/useUser'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const { isLogged, isAdmin, logOut } = useUser()
    const router = useRouter()
    console.log("isAdmin")
    console.log('isAdmin: ' + isAdmin.value)

    return {
      isLogged,
      isAdmin,
      logOut: (() => {
        console.log('logOut')
        logOut()
        router.push({ name: 'home' })
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>