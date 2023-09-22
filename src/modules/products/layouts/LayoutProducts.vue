<template>
    <header>
        <HeaderLayout />
        <NavbarLayout />
    </header>

    <router-view v-slot="{ Component, route }">
        <keep-alive>
            <component :is="Component" :key="route.name" />
        </keep-alive>
    </router-view>

    <FooterLayout />
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    components: {
        HeaderLayout: defineAsyncComponent(() => import('./HeaderLayout.vue')),
        NavbarLayout: defineAsyncComponent(() => import('./NavbarLayout.vue')),
        FooterLayout: defineAsyncComponent(() => import('./FooterLayout.vue')),
    }
}
</script>

<style scoped></style>