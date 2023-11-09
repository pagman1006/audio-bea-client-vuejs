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
import Editor from '@tinymce/tinymce-vue'

export default {
  components: {
    Editor
  },
  setup() {


    return {}
  }
}
</script>

<style lang="scss" scoped></style>