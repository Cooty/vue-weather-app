<template>
  <main class="sticky-footer-container">
    <section class="sticky-footer-content">
      This here will be the main display
      <ui-button>Hey there!</ui-button>
    </section>
    <section class="sticky-footer-footer">
      I'm on the bottom of the page
    </section>
  </main>
</template>

<script>
import UiButton from '../ui/Button.vue'

export default {
  name: 'App',
  components: {
    UiButton
  }
}
</script>
