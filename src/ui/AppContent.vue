<template>
  <section class="app-content d-flex flex-column justify-content-center">
    <slot />
  </section>
</template>

<script>
export default {
  name: "AppContent"
}
</script>

<style scoped>
.app-content {
  flex: 1;
}
</style>