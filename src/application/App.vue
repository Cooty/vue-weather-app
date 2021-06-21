<template>
  <main class="sticky-footer-container">
    <section class="sticky-footer-content d-flex flex-column justify-content-center">
      <wrapper>
        <template v-if="appState.weatherData.temp && !appState.isLoading && !appState.isError">
          <display
            :weather-data="appState.weatherData"
            :city="appState.city"
            :country-code="appState.countryCode"
            :lat="appState.lat"
            :lon="appState.lon"
          />
        </template>
        <template v-else-if="appState.isLoading">
          <div class="text-center">
            <b-spinner
              variant="primary"
              label="Loading"
            />
          </div>
        </template>
        <template v-else-if="appState.isError">
          <b-alert
            show
            variant="danger"
          >
            {{ appState.errorMessage }}
          </b-alert>
        </template>
      </wrapper>
    </section>
    <section class="sticky-footer-footer">
      <query-form />
    </section>
  </main>
</template>

<script>
import QueryForm from '../domain/query/QueryForm.vue'
import Display from '../domain/display/Display.vue'
import store from '../infrastructure/store'
import Wrapper from '../ui/Wrapper.vue'
import {BSpinner, BAlert} from 'bootstrap-vue'

export default {
  name: 'App',
  data() {
    return {
      appState: store.state
    }
  },
  components: {
    QueryForm,
    Display,
    BSpinner,
    BAlert,
    Wrapper
  }
}
</script>
