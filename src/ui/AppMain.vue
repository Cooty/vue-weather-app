<template>
  <main
    class="app-main position-relative d-flex flex-column h-100"
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
  .app-main.theme-light {
    background: var(--white);
    color: var(--dark);
  }

  .app-main.theme-dark {
    background: var(--dark);
    color: var(--light);
  }
</style>
