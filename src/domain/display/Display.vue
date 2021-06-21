<template>
  <b-card
    tag="article"
    class="shadow"
  >
    <text-row :bold="true">
      <template v-if="city && countryCode">
        The weather for {{ city }} ({{ countryCode.toUpperCase() }}) is:
      </template>
      <template v-else>
        The weather for a random coordinate (lat: {{ lat }}, lon: {{ lon }}) is:
      </template>
    </text-row>
    <div class="d-flex flex-nowrap justify-content-between">
      <h1 class="h2">
        <formatted-temperature :temp="weatherData.temp" />
      </h1>
      <div>
        <b-badge variant="info">
          {{ weatherData.description }}
        </b-badge>
      </div>
    </div>
    <text-row>
      feels like <formatted-temperature :temp="weatherData.feelsLike" />
    </text-row>
    <divider />
    <text-row :muted="true">
      Humidity: {{ weatherData.humidity }}%
    </text-row>
    <text-row
      :muted="true"
      :no-bottom-margin="true"
    >
      Pressure: {{ weatherData.pressure }}hPa
    </text-row>
  </b-card>
</template>

<script>
import TextRow from '../../ui/TextRow.vue'
import Divider from '../../ui/Divider.vue'
import FormattedTemperature from './FormattedTemperature.vue'
import {BCard, BBadge} from 'bootstrap-vue'
import WeatherData from '../../infrastructure/model/WeatherData'

export default {
  name: 'Display',
  components: {
    BCard,
    TextRow,
    Divider,
    BBadge,
    FormattedTemperature
  },
  props: {
    weatherData: {
      type: WeatherData,
      required: true
    },
    lat: {
      type: Number,
      default: 0
    },
    lon: {
      type: Number,
      default: 0
    },
    city: {
      type: String,
      default: ''
    },
    countryCode: {
      type: String,
      default: ''
    }
  }
}
</script>
