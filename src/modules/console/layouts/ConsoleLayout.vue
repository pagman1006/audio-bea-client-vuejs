<template>
  <header>
    <NavbarView />
  </header>
  <router-view v-slot="{ Component, route }">
    <keep-alive>
      <component :is="Component" :key="route.name" />
    </keep-alive>
  </router-view>
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