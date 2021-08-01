<template>
  <main class="sticky-footer-container">
    <section class="sticky-footer-content d-flex flex-column justify-content-center position-relative">
      <language-changer />
      <wrapper>
        <template v-if="appState.weatherData.temp && !appState.isLoading && !appState.isError">
          <display
            :weather-data="appState.weatherData"
            :city="appState.city"
            :lat="appState.lat"
            :lon="appState.lon"
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
import LanguageChanger from '../infrastructure/i18n/LanguageChanger.vue';

export default {
  name: 'App',
  components: {
    QueryForm,
    Display,
    BSpinner,
    BAlert,
    Wrapper,
    LanguageChanger
  },
  data() {
    return {
      appState: store.state
    }
  }
}
</script>
