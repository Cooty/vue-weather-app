<template>
  <div
    class="rounded"
    :class="appState.theme === 'dark' ? 'bg-dark-form-control-border' : 'bg-white'"
  >
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
  </div>
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
      const params = {
        lat: store.state.coords ? store.state.coords.lat : null,
        lon: store.state.coords ? store.state.coords.lon : null,
        q: !store.state.coords ? store.state.city : null,
        lang: this.$i18n.locale,
        units: value
      }

      this.$bubble('update-weather', params)
    }
  }
}
</script>
