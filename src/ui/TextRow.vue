<template>
  <p
    class="text-row"
    :class="{'font-weight-bold': bold, 'text-muted': muted, 'mb-0': noBottomMargin}"
  >
    <slot />
  </p>
</template>

<script>
export default {
  name: 'TextRow',
  props: {
    bold: {
      type: Boolean,
      default: false
    },
    muted: {
      type: Boolean,
      default: false
    },
    noBottomMargin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  .theme-dark .text-row.text-muted {
    color: var(--dark) !important;
  }
</style>
