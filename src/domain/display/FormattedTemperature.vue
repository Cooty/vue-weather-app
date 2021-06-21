<template>
  <span class="text-nowrap">
    {{ Math.floor(temp) }}°C
  </span>
</template>

<script>
export default {
  name: 'FormattedTemperature',
  props: {
    temp: {
      type: Number,
      required: true
    }
  }
}
</script>
