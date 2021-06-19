<template>
  <b-button
    :type="type"
    :block="block"
    :disabled="disabled"
    :size="size"
    :squared="squared"
    :tag="tag"
    :variant="variant"
  >
    <slot />
  </b-button>
</template>

<script>
import { BButton } from 'bootstrap-vue';

export default {
  name: 'UiButton',
  components: {
    BButton
  },
  // see: https://bootstrap-vue.org/docs/components/button#buttons
  props: {
    block: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].indexOf(value) !== -1
    },
    squared: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'button',
      validator: (value) => ['button', 'a', 'span'].indexOf(value) !== -1
    },
    type: {
      type: String,
      default: 'button',
      validator: (value) => ['button', 'submit', 'reset'].indexOf(value) !== -1
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
        'outline-primary',
        'outline-secondary',
        'outline-success',
        'outline-danger',
        'outline-warning',
        'outline-info',
        'outline-light',
        'outline-dark'
      ].indexOf(value) !== -1
    }
  }
}
</script>
