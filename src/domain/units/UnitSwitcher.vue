<template>
  <b-form-radio-group
    id="unit-switcher"
    v-model="appState.units"
    name="unit-switcher-buttons"
    button-variant="outline-primary"
    buttons
    class="text-nowrap"
    @change="changeHandler"
  >
    <b-form-radio value="metric">
      {{ $t('messages.metric') }}: °C
    </b-form-radio>
    <b-form-radio value="imperial">
      {{ $t('messages.imperial') }}: °F
    </b-form-radio>
  </b-form-radio-group>
</template>

<script>
import { BFormRadioGroup, BFormRadio } from 'bootstrap-vue'
import store from '../../infrastructure/store'

export default {
  name: 'UnitSwitcher',
  components: {
    BFormRadioGroup,
    BFormRadio
  },
  data() {
    return {
      appState: store.state
    }
  },
  methods: {
    changeHandler(value) {
      const params = {}

      if(store.state.coords) {
        params.lat = store.state.coords.lat
        params.lon = store.state.coords.lon
      } else {
        params.q = store.state.city
      }
      params.lang = this.$i18n.locale
      params.units = value

      this.$bubble('update-weather', params)
    }
  }
}
</script>
