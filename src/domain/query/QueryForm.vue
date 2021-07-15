<template>
  <article class="bg-light py-3 shadow-lg">
    <wrapper>
      <b-form @submit.prevent="submitHandler">
        <b-form-group
          label="Country:"
          label-for="select-country"
        >
          <b-form-select
            id="select-country"
            v-model="query.country"
            :options="countries"
            required
          />
        </b-form-group>
        <b-form-group
          label="City:"
          label-for="input-city"
        >
          <b-form-input
            id="input-city"
            v-model="query.city"
            name="city"
            placeholder="Type your city"
            required
          />
        </b-form-group>
        <b-form-group>
          <b-button
            type="submit"
            variant="primary"
            :disabled="!valid || appState.isLoading"
          >
            Check the weather!
          </b-button>
        </b-form-group>
      </b-form>
    </wrapper>
  </article>
</template>

<script>
import Wrapper from '../../ui/Wrapper.vue'
import {BForm, BFormGroup, BFormInput, BFormSelect, BButton} from 'bootstrap-vue'
import countryOptions from './country-options'
import getRandomCoordinates from './get-random-coordinates'
import {getWeatherByCityAndCountry, getWeatherByCoordinates} from './api'
import WeatherData from '../../infrastructure/model/WeatherData'
import store from '../../infrastructure/store'
import cache from '../../infrastructure/cache'

export default {
  name: 'QueryForm',
  components: {
    Wrapper,
    BForm,
    BFormInput,
    BFormGroup,
    BFormSelect,
    BButton
  },
  data() {
    return {
      query: {
        city: '',
        country: null,
      },
      countries: [{ text: 'Select a country', value: null }, ...countryOptions],
      appState: store.state
    }
  },
  computed: {
    valid: function() {
      return this.query.city && this.query.country
    }
  },
  mounted() {
    this.mountHandler()
  },
  methods: {
    errorHandler: (e) => {
      store.setIsError(true)
      store.setErrorMessage(e.message)
    },
    makeWeatherData: (response) => {
      return new WeatherData(
        response.main.temp,
        response.weather[0].description,
        response.main.feels_like,
        response.main.humidity,
        response.main.pressure
      )
    },
    submitHandler: async function() {
      store.setIsLoading(true)
      store.setErrorMessage('')
      store.setIsError(false)
      try {
        let weatherData = cache.getFromCache(`${this.query.city}${this.query.country}`)

        if(!weatherData) {
          const weatherApiResponse = await getWeatherByCityAndCountry(this.query.city, this.query.country)
          weatherData = this.makeWeatherData(weatherApiResponse)
          cache.saveToCache(`${this.query.city}${this.query.country}`, weatherData)
        }

        store.setWeatherData(weatherData)
        store.setLat(0)
        store.setLon(0)
        store.setCity(this.query.city)
        store.setCountryCode(this.query.country)

      } catch (e) {
        this.errorHandler(e)
      }
      store.setIsLoading(false)
    },
    mountHandler: async function() {
      const coords = getRandomCoordinates()
      try {
        const weatherApiResponse = await getWeatherByCoordinates(coords.lat, coords.lon)
        const weatherData = this.makeWeatherData(weatherApiResponse)

        store.setWeatherData(weatherData)
        store.setLat(coords.lat)
        store.setLon(coords.lon)
      } catch (e) {
        this.errorHandler(e)
      }

      store.setIsLoading(false)
    }
  }
}
</script>
