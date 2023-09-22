<template>
    <nav class="navbar navbar-expand-md bg-body-tertiarity " data-bs-theme="dark">
        <div class="mx-5 container-fluid">
            <router-link to="/" class="navbar-brand">
                AUDIO - BEA
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" :to="{ name: 'home' }">Inicio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'promociones' }">Promociones</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'categorias' }">Categorías</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'audio-video' }">Audio y Sonido</router-link>
                    </li>
                    <li v-if="user" class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">Mi Cuenta</a>
                        <ul class="dropdown-menu">
                            <li>
                                <router-link class="dropdown-item" :to="{ name: 'consola' }">Consola</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" :to="{ name: 'mi-cuenta' }">Cuenta </router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" :to="{ name: 'siguiendo' }">Siguiendo </router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" :to="{ name: 'carrito' }">Carrito </router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" :to="{ name: 'cerrar-sesion' }">Salir </router-link>
                            </li>
                        </ul>
                    </li>
                    <li v-else class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'iniciar-sesion' }">Iniciar sesión</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import useProducts from '../composables/useProducts'

export default {
    components: {
        HeaderLayout: defineAsyncComponent(() => import('./HeaderLayout.vue')),
    },
    setup() {

        const { user } = useProducts()

        return {
            user
        }
    }
}

</script>

<style scoped>
nav {
    border-top: 3px solid #D10024;
    border-bottom: 8px solid #D10024;
}
</style>