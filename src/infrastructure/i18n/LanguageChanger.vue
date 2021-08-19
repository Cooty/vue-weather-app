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
    changeHandler(value) {
      const params = {
        lat: store.state.coords ? store.state.coords.lat : null,
        lon: store.state.coords ? store.state.coords.lon : null,
        q: !store.state.coords ? store.state.city : null,
        lang: value,
        units: store.state.units
      }

      this.$bubble('update-weather', params)
    }
  }
}
</script>
