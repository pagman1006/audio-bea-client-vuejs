<template>
  <div class="section">
    <div class="container">
      <router-view v-slot="{ Component, route }">
        <keep-alive>
          <component :is="Component" :key="route.name" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped></style>