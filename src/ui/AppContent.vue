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
@media screen and (min-width: 768px) {
  .app-content {
    flex: 1;
  }
}

@media screen and (max-width: 767px) {
  .app-content {
    position: absolute;
    width: 100%;
    top: var(--bottom-bar-height);
    bottom: var(--bottom-bar-height);
    overflow-y: auto;
  }
}
</style>
