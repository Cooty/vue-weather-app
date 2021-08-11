<template>
  <span class="text-nowrap">
    {{ Math.floor(temp) }}{{ appState.units === 'metric' ? '°C' : '°F' }}
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
  }
}
</script>
