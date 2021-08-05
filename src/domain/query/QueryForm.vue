<template>
  <b-form
    inline
    @submit.prevent="submitHandler"
  >
    <label
      for="input-city"
      class="sr-only"
    >
      {{ $t('messages.cityLabel') }}
    </label>
    <b-form-input
      id="input-city"
      v-model="city"
      name="city"
      class="query-form-city"
      :placeholder="$t('messages.cityPlaceholder')"
      required
    />
    <b-button
      type="submit"
      class="query-form-submit"
      variant="primary"
      :disabled="!valid || appState.isLoading"
      :aria-label="$t('messages.submit')"
    >
      <b-icon-search />
    </b-button>
  </b-form>
</template>

<script>
import {
  BForm,
  BFormInput,
  BButton,
  BIconSearch
} from 'bootstrap-vue'
import getRandomCoordinates from './get-random-coordinates'
import {getWeatherByCity, getWeatherByCoordinates} from './api'
import store from '../../infrastructure/store'
import cache from '../../infrastructure/cache'
import {
  errorHandler,
  setToLoadingState,
  setCityData,
  setCoordsData
} from '../../infrastructure/data-update'
import { makeWeatherData } from '../../infrastructure/factory/weather-data'

export default {
  name: 'QueryForm',
  components: {
    BForm,
    BFormInput,
    BIconSearch,
    BButton,
  },
  data() {
    return {
      city: '',
      appState: store.state,
    }
  },
  computed: {
    valid: function () {
      return this.city
    }
  },
  mounted() {
    this.mountHandler()
  },
  methods: {
    submitHandler: async function () {
      setToLoadingState(store)
      try {
        const cacheKey = `${this.city}${this.$i18n.locale}`
        let weatherData = cache.getFromCache(cacheKey)

        if (!weatherData) {
          const weatherApiResponse = await getWeatherByCity(
            this.city,
            {lang: this.$i18n.locale}
          )
          weatherData = makeWeatherData(weatherApiResponse)
          cache.saveToCache(cacheKey, weatherData)
        }

        setCityData(weatherData, this.city, store)
      } catch (e) {
        errorHandler(e, store)
      } finally {
        store.setIsLoading(false)
      }
    },
    mountHandler: async function () {
      const coords = getRandomCoordinates()
      try {
        const weatherApiResponse = await getWeatherByCoordinates(
          coords.lat,
          coords.lon,
          {lang: this.$i18n.locale}
        )
        const weatherData = makeWeatherData(weatherApiResponse)
        setCoordsData(weatherData, coords, store)
      } catch (e) {
        errorHandler(e, store)
      } finally {
        store.setIsLoading(false)
      }
    }
  }
}
</script>

<style scoped>
.query-form-city {
  flex: 1;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.query-form-submit {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

</style>
