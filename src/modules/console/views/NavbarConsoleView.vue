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
          <li class="nav-item dropdown mx-5">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Marcas
            </a>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item" :to="{ name: 'add-brand' }">Nuevo</router-link></li>
              <li><router-link class="dropdown-item" :to="{ name: 'list-brand' }">Listar </router-link></li>
            </ul>
          </li>
          <li class="nav-item dropdown mx-5">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sub Marcas
            </a>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item" :to="{ name: 'add-sub-brand' }">Nuevo</router-link></li>
              <li><router-link class="dropdown-item" :to="{ name: 'list-sub-brand' }">Listar </router-link></li>
            </ul>
          </li>
          <li class="nav-item dropdown mx-5">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Productos
            </a>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item" :to="{ name: 'add-product' }">Nuevo</router-link></li>
              <li><router-link class="dropdown-item" to="{name: 'following' }">Listar </router-link></li>
            </ul>
          </li>
          <li class="nav-item dropdown mx-5">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Usuarios
            </a>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item" to="{name: 'consola' }">Nuevo</router-link></li>
              <li><router-link class="dropdown-item" to="{name: 'following' }">Listar </router-link></li>
            </ul>
          </li>
        </ul>
        <ul class="navbar-nav mx-5">
          <li class="nav-item"><button class="btn btn-danger btn-sm" @click="logOut">Cerrar sesión</button></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import useUser from '@/modules/auth/composables/useUser'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const { logOut } = useUser()
    const router = useRouter()

    return {
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