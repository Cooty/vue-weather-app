<template>
  <section class="app-content flex-column justify-content-center">
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
    display: flex;
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
