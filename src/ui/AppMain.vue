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
