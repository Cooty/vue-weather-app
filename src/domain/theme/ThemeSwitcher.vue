<template>
  <b-form-checkbox
    v-model="checked"
    name="theme-switcher"
    switch
    size="lg"
    @change="changeHandler"
  >
    <template v-if="appState.theme === 'dark'">
      <span class="text-light">
        <b-icon-sun />
      </span>
    </template>
    <template v-else>
      <span class="text-secondary">
        <b-icon-moon />
      </span>
    </template>
  </b-form-checkbox>
</template>

<script>
import {BFormCheckbox, BIconMoon, BIconSun} from 'bootstrap-vue'
import store from '../../infrastructure/store'

export default {
  name: 'ThemeSwitcher',
  components: {
    BFormCheckbox,
    BIconMoon,
    BIconSun
  },
  data() {
    return {
      checked: false,
      appState: store.state
    }
  },
  methods: {
    changeHandler(value) {
      const theme = value ? 'dark' : 'light'

      store.setTheme(theme)
    }
  }
}
</script>
