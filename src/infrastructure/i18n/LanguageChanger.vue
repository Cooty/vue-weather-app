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
      const payload = {
        options: {
          lang: value
        }
      }

      if(store.state.coords) {
        payload.coords = store.state.coords
      } else {
        payload.city = store.state.city
      }

      this.$bubble('update-weather', payload)
    }
  }
}
</script>
