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
      if(store.state.lat && store.state.lon) {
        this.$bubble('update-weather', {
          coords: {lat: store.state.lat, lon: store.state.lon},
          options: {
            lang: value
          }
        })
      } else {
        this.$bubble('update-weather', {
          city: store.state.city,
          options: {
            lang: value
          }
        })
      }
    }
  }
}
</script>
