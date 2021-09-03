<template>
  <span class="text-nowrap">
    {{ $n(formattedVisibility, {maximumFractionDigits: 1}) }}{{ unit }}
  </span>
</template>

<script>
import store from '../../infrastructure/store'

export default {
  name: 'FormattedVisibility',
  props: {
    visibility: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      appState: store.state
    }
  },
  computed: {
    formattedVisibility: function() {
      const divisor = this.appState.units === 'metric' ? 1000 : 1609

      return (this.visibility / divisor).toFixed(1)
    },
    unit: function() {
      return this.appState.units === 'metric' ? 'km' : 'mi'
    }
  }
}
</script>
