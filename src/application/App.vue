<template>
  <app-main @update-weather="onUpdateWeatherHandler">
    <app-header>
      <template #left>
        <query-form />
      </template>
      <template #right>
        <language-changer />
      </template>
    </app-header>

    <app-content>
      <wrapper>
        <template v-if="appState.weatherData && !appState.isLoading && !appState.isError">
          <display
            :weather-data="appState.weatherData"
            :city="appState.city"
            :coords="appState.coords"
          />
        </template>
        <template v-else-if="appState.isLoading">
          <div class="text-center">
            <b-spinner
              :title="$t('messages.loading')"
              variant="primary"
              :label="$t('messages.loading')"
            />
          </div>
        </template>
        <template v-else-if="appState.isError">
          <b-alert
            show
            variant="danger"
          >
            {{ $t(appState.errorMessage) }}
          </b-alert>
        </template>
      </wrapper>
    </app-content>
  </app-main>
</template>

<script>
import QueryForm from '../domain/query/QueryForm.vue'
import Display from '../domain/display/Display.vue'
import store from '../infrastructure/store'
import Wrapper from '../ui/Wrapper.vue'
import AppMain from '../ui/AppMain.vue'
import AppHeader from '../ui/AppHeader.vue'
import AppContent from '../ui/AppContent.vue'
import {BSpinner, BAlert} from 'bootstrap-vue'
import LanguageChanger from '../infrastructure/i18n/LanguageChanger.vue'
import {getWeather} from '../infrastructure/api/api'
import {makeWeatherData} from '../infrastructure/factory/weather-data'
import {
  errorHandler,
  setCityData,
  setCoordsData,
  setToLoadingState
} from '../infrastructure/data-update'
import cache from '../infrastructure/cache'
import serialize from '../utils/serialize'
import Coords from '../infrastructure/model/Coords'

export default {
  name: 'App',
  components: {
    QueryForm,
    Display,
    BSpinner,
    BAlert,
    Wrapper,
    LanguageChanger,
    AppHeader,
    AppMain,
    AppContent
  },
  data() {
    return {
      appState: store.state
    }
  },
  methods: {
    onUpdateWeatherHandler: async (params) => {
      setToLoadingState(store)
      try {
        let weatherData;
        const cacheKey = serialize(params)
        const cachedWeatherData = cache.getFromCache(cacheKey)

        if(!cachedWeatherData) {
          const weatherApiResponse = await getWeather(params)

          weatherData = makeWeatherData(weatherApiResponse)
          cache.saveToCache(cacheKey, weatherData)
        } else {
          weatherData = cachedWeatherData
        }

        if(params.q) {
          setCityData(weatherData, params.q, store)
        } else {
          setCoordsData(
            weatherData,
            new Coords(params.lat, params.lon),
            store
          )
        }
      } catch(e) {
        errorHandler(e, store)
      } finally {
        store.setIsLoading(false)
      }
    }
  }
}
</script>
