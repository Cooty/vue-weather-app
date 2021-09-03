<template>
  <span class="text-nowrap">
    <span class="mr-1">
      <b-icon-arrow-up :style="`transform: rotate(${windDeg}deg)`" />
    </span>{{ $n(windSpeed, {maximumFractionDigits: 1}) }}{{ unit }}
  </span>
</template>

<script>
import store from '../../infrastructure/store'
import { BIconArrowUp } from 'bootstrap-vue'

export default {
  name: 'FormattedWindSpeed',
  components: { BIconArrowUp },
  props: {
    windSpeed: {
      type: Number,
      required: true
    },
    windDeg: {
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
      return this.appState.units === 'metric' ? 'm/s' : 'mph'
    }
  }
}
</script>
