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
      v-model="cityInput"
      name="city"
      class="query-form-input"
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
  props: {
    city: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      cityInput: this.city,
      appState: store.state,
    }
  },
  computed: {
    valid() {
      return this.cityInput
    }
  },
  watch: {
    city: function(newVal, _) {
      if(!newVal) {
        this.cityInput = ''
      }
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
        q: this.cityInput,
        lang: this.$i18n.locale,
        units: this.appState.units
      })
    }
  }
}
</script>

<style scoped>
.query-form-input {
  flex: 1;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right-width: 0;
}

.query-form-submit {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
