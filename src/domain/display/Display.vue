<template>
  <b-card
    tag="article"
    class="shadow"
  >
    <text-row :bold="true">
      <template v-if="city">
        {{ $t('messages.weatherForCity', {city}) }}
      </template>
      <template v-else>
        {{ $t('messages.weatherForCoordinates', {lat, lon}) }}
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
      {{ $t('messages.feelsLike') }} <formatted-temperature :temp="weatherData.feelsLike" />
    </text-row>
    <divider />
    <text-row :muted="true">
      {{ $t('messages.humidity') }}: {{ weatherData.humidity }}%
    </text-row>
    <text-row
      :muted="true"
      :no-bottom-margin="true"
    >
      {{ $t('messages.pressure') }}: {{ weatherData.pressure }}hPa
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
    }
  }
}
</script>
