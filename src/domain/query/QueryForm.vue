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
import getRandomCoordinates from '../../infrastructure/get-random-coordinates'
import store from '../../infrastructure/store'

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
    valid() {
      return this.city
    }
  },
  mounted() {
    const coords = getRandomCoordinates()

    this.$bubble('update-weather', {
      lat: coords.lat,
      lon: coords.lon,
      lang: this.$i18n.locale,
      units: this.appState.units
    })
  },
  methods: {
    submitHandler() {
      this.$bubble('update-weather', {
        q: this.city,
        lang: this.$i18n.locale,
        units: this.appState.units
      })
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
