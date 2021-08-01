<template>
  <article class="bg-light py-3 shadow-lg">
    <wrapper>
      <b-form @submit.prevent="submitHandler">
        <b-form-group
          :label="$t('messages.cityLabel')"
          label-for="input-city"
        >
          <b-form-input
            id="input-city"
            v-model="city"
            name="city"
            :placeholder="$t('messages.cityPlaceholder')"
            required
          />
        </b-form-group>
        <b-form-group>
          <b-button
            type="submit"
            variant="primary"
            :disabled="!valid || appState.isLoading"
          >
            {{ $t('messages.submit') }}
          </b-button>
        </b-form-group>
      </b-form>
    </wrapper>
  </article>
</template>

<script>
import Wrapper from '../../ui/Wrapper.vue'
import {
  BForm,
  BFormGroup,
  BFormInput,
  BButton,
} from 'bootstrap-vue'
import getRandomCoordinates from './get-random-coordinates'
import {getWeatherByCity, getWeatherByCoordinates} from './api'
import store from '../../infrastructure/store'
import cache from '../../infrastructure/cache'
import {
  makeWeatherData,
  errorHandler,
  setToLoadingState,
  setCityData,
  setCoordsData
} from '../../infrastructure/data-update'

export default {
  name: 'QueryForm',
  components: {
    Wrapper,
    BForm,
    BFormInput,
    BFormGroup,
    BButton,
  },
  data() {
    return {
      city: '',
      appState: store.state,
    }
  },
  computed: {
    valid: function() {
      return this.city
    }
  },
  mounted() {
    this.mountHandler()
  },
  methods: {
    submitHandler: async function() {
      setToLoadingState(store)
      try {
        const cacheKey = `${this.city}${this.$i18n.locale}`
        let weatherData = cache.getFromCache(cacheKey)

        if(!weatherData) {
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
    mountHandler: async function() {
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
