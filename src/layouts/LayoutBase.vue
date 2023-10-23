<template>
  <header>
    <HeaderView />
    <NavbarView />
  </header>

  <router-view v-slot="{ Component, route }">
    <keep-alive>
      <component :is="Component" :key="route.name" />
    </keep-alive>
  </router-view>

  <FooterView />
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    HeaderView: defineAsyncComponent(() => import('../views/HeaderView.vue')),
    NavbarView: defineAsyncComponent(() => import('../views/NavbarView.vue')),
    FooterView: defineAsyncComponent(() => import('../views/FooterView.vue')),
  }
}
</script>

<style lang="scss" scoped></style>