<template>
  <b-form-checkbox
    v-model="checked"
    name="theme-switcher"
    switch
    size="lg"
    :aria-label="$t('messages.switchTheme')"
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
import { BFormCheckbox, BIconMoon, BIconSun } from "bootstrap-vue";
import store from "../../infrastructure/store";
import { persistSetting } from "../../infrastructure/save-settings";

export default {
  name: "ThemeSwitcher",
  components: {
    BFormCheckbox,
    BIconMoon,
    BIconSun,
  },
  data() {
    return {
      appState: store.state,
    };
  },
  computed: {
    checked: {
      get: function () {
        return this.appState.theme === "dark" ? true : false;
      },
      set: function (newValue) {
        console.log({ newValue });
      },
    },
  },
  methods: {
    changeHandler(value) {
      const themeSetting = value ? "dark" : "light";
      store.setTheme(themeSetting);
      persistSetting("theme", themeSetting);
    },
  },
};
</script>
