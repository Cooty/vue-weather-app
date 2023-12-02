<template>
  <b-form-checkbox
    v-model="checked"
    name="theme-switcher"
    switch
    size="lg"
    :aria-label="t('messages.switchTheme')"
    @change="changeHandler"
  >
    <template v-if="store.theme === 'dark'">
      <span class="text-light">
        <i-bi-sun />
      </span>
    </template>
    <template v-else>
      <span class="text-secondary">
        <i-bi-moon />
      </span>
    </template>
  </b-form-checkbox>
</template>

<script>
import store from "../../infrastructure/store";
import { persistSetting } from "../../infrastructure/save-settings";
import { useI18n } from "vue-i18n";

export default {
  name: "ThemeSwitcher",
  setup() {
    const { t } = useI18n();
    return { store, t };
  },
  computed: {
    checked: {
      get: function () {
        return store.theme === "dark" ? true : false;
      },
    },
  },
  methods: {
    changeHandler(value) {
      const themeSetting = value ? "dark" : "light";
      store.theme = themeSetting;
      persistSetting("theme", themeSetting);
    },
  },
};
</script>
