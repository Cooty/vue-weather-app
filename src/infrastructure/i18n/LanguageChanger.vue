<template>
  <b-form-select
    v-model="$i18n.locale"
    :options="languages"
    @change="changeHandler"
  />
</template>

<script>
import {BFormSelect} from 'bootstrap-vue'
import langCodes from './lang-codes'
import store from '../store'
import cache from '../cache'
import {getWeatherByCity, getWeatherByCoordinates} from '../../domain/query/api';
import {
  errorHandler,
  setToLoadingState,
  setCityData
} from '../data-update'
import {makeWeatherData} from '../factory/weather-data'

export default {
  name: 'LanguageChanger',
  components: {
    BFormSelect
  },
  data() {
    return {
      languages: [
        {text: 'English', value: langCodes.EN},
        {text: 'Deutsch', value: langCodes.DE},
        {text: 'Magyar', value: langCodes.HU},
        {text: 'български', value: langCodes.BG}
      ]
    }
  },
  methods: {
    async changeHandler(value) {
      setToLoadingState(store)
      try {
        if(store.state.lat && store.state.lon) {
          const weatherApiResponse = await getWeatherByCoordinates(
            store.state.lat,
            store.state.lon,
            {lang: value}
          )
          store.setWeatherData(makeWeatherData(weatherApiResponse))
        } else {
          const cacheKey = `${store.state.city}${value}`
          let weatherData = cache.getFromCache(cacheKey)

          if(!weatherData) {
            const weatherApiResponse = await getWeatherByCity(
              store.state.city,
              {lang: value}
            )
            weatherData = makeWeatherData(weatherApiResponse)
            cache.saveToCache(cacheKey, weatherData)
          }
          setCityData(weatherData, store.state.city, store)
        }
      } catch (e) {
        errorHandler(e, store)
      } finally {
        store.setIsLoading(false)
      }
    }
  }
}
</script>
