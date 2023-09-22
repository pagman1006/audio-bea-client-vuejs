<template>
    <slot v-for="product in products" :key="product.id" :product="product"></slot>
</template>

<script>
export default {
    props: {
        products: {
            type: Array,
            required: true
        }
    },
    setup() {

    }
}
</script>

<style lang="scss" scoped></style>