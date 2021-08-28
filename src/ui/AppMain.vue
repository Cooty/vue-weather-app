<template>
  <main
    class="app-main d-flex flex-column h-100"
    :class="`theme-${theme}`"
  >
    <slot />
  </main>
</template>

<script>
export default {
  name: 'AppMain',
  props: {
    theme: {
      type: String,
      default: 'light'
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 1023px) {
  .app-main {
    padding-bottom: var(--bottom-bar-height);
  }
}
</style>
