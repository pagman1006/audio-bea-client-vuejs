<template>
    <ProductsCollection />
    <ProductsSlick />
    <Hotdeal />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        ProductsCollection: defineAsyncComponent(() => import('@/modules/products/components/ProductsCollection.vue')),
        ProductsSlick: defineAsyncComponent(() => import('@/modules/products/components/ProductsSlick.vue')),
        Hotdeal: defineAsyncComponent(() => import('../components/Hotdeal.vue'))
    },
    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped></style>