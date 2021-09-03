<template>
  <b-card
    tag="article"
    class="shadow"
    :class="appState.theme === 'light' ? '' : 'bg-secondary'"
  >
    <b-row class="w-100 no-gutters">
      <b-col
        :cols="12"
        :md="6"
        class="pr-md-2 pr-lg-3"
      >
        <template v-if="city">
          <text-row :bold="true">
            {{ $t('messages.weatherForCity', {city}) }}
          </text-row>
        </template>
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
        <text-row :muted="true">
          {{ $t('messages.pressure') }}: {{ weatherData.pressure }}hPa
        </text-row>
        <text-row :muted="true">
          {{ $t('messages.windSpeed') }}:
          <formatted-wind-speed
            :wind-speed="weatherData.windSpeed"
            :wind-deg="weatherData.windDeg"
          />
        </text-row>
        <text-row
          :muted="true"
          :no-bottom-margin="true"
        >
          {{ $t('messages.visibility') }}: <formatted-visibility :visibility="weatherData.visibility" />
        </text-row>
      </b-col>
      <b-col
        :cols="12"
        :md="6"
        class="mt-4 mt-md-0 pl-md-2 pl-lg-3"
      >
        <app-map :coords="coords" />
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import TextRow from '../../ui/TextRow.vue'
import Divider from '../../ui/Divider.vue'
import FormattedTemperature from './FormattedTemperature.vue'
import {BCard, BBadge, BRow, BCol} from 'bootstrap-vue'
import WeatherData from '../../infrastructure/model/WeatherData'
import Coords from '../../infrastructure/model/Coords'
import store from '../../infrastructure/store'
import AppMap from './AppMap.vue'
import FormattedWindSpeed from './FormattedWindSpeed.vue'
import FormattedVisibility from './FormattedVisibility.vue'

export default {
  name: 'Display',
  components: {
    BCard,
    TextRow,
    Divider,
    BBadge,
    FormattedTemperature,
    AppMap,
    BRow,
    BCol,
    FormattedWindSpeed,
    FormattedVisibility
  },
  props: {
    weatherData: {
      type: WeatherData,
      required: true
    },
    coords: {
      type: Coords,
      required: true
    },
    city: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      appState: store.state
    }
  }
}
</script>
