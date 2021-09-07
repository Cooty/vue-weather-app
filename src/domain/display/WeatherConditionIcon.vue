<template>
  <span>{{ iconName }}</span>
</template>

<script>
// TODO: Add test for this component
export default {
  name: 'WeatherConditionIcon',
  props: {
    iconCode: {
      type: String,
      required: true
    }
  },
  computed: {
    iconName() {
      if (this.iconCode === '01d' || this.iconCode === '01n') {
        return '☀'
      } else if (this.iconCode === '02d' || this.iconCode === '02n') {
        return '🌤️'
      } else if (this.iconCode === '03d' || this.iconCode === '03n') {
        return '🌥️'
      } else if (this.iconCode === '04d' || this.iconCode === '04n') {
        return '☁'
      } else if (this.iconCode === '09d' || this.iconCode === '09n') {
        return '🌧️'
      } else if (this.iconCode === '10d' || this.iconCode === '10n') {
        return '🌦️'
      } else if (this.iconCode === '11d' || this.iconCode === '11n') {
        return '🌩️'
      } else if (this.iconCode === '13d' || this.iconCode === '13n') {
        return '❄'
      } else if (this.iconCode === '50d' || this.iconCode === '50n') {
        return '🌫️'
      } else {
        return '🌡️'
      }
    }
  }
}
</script>
