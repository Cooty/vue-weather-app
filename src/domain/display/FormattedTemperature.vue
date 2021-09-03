<template>
  <span class="text-nowrap">
    {{ Math.floor(temp) }}{{ unit }}
  </span>
</template>

<script>
import store from '../../infrastructure/store'

export default {
  name: 'FormattedTemperature',
  props: {
    temp: {
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
    unit: function() {
      return this.appState.units === 'metric' ? '°C' : '°F'
    }
  }
}
</script>
