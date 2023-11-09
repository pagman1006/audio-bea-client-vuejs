<template>
  <header>
    <NavbarView />
  </header>
  <div class="container">
    <router-view v-slot="{ Component, route }">
      <keep-alive>
        <component :is="Component" :key="route.name" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    NavbarView: defineAsyncComponent(() => import('../views/NavbarConsoleView.vue'))
  },
  setup() {


    return {}
  }
}
</script>

<style lang="scss" scoped></style>