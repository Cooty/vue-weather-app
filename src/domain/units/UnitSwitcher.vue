<template>
  <div
    class="rounded"
    :class="store.theme === 'dark' ? 'bg-dark-form-control-border' : 'bg-white'"
  >
    <b-form-radio-group
      id="unit-switcher"
      v-model="store.units"
      name="unit-switcher-buttons"
      button-variant="outline-primary"
      buttons
      class="text-nowrap"
      @change="changeHandler"
    >
      <b-form-radio value="metric" data-testid="metric">
        <span class="d-none d-md-inline">{{ t("messages.metric") }}: </span>°C
      </b-form-radio>
      <b-form-radio value="imperial" data-testid="imperial">
        <span class="d-none d-md-inline"> {{ t("messages.imperial") }}: </span
        >°F
      </b-form-radio>
    </b-form-radio-group>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import store from "../../infrastructure/store";
import { persistSetting } from "../../infrastructure/save-settings";
import i18n from "../../infrastructure/i18n/i18n";

export default {
  name: "UnitSwitcher",
  setup() {
    const { t } = useI18n();
    return {
      store,
      t,
    };
  },
  methods: {
    changeHandler(value) {
      const params = {
        lat: store.coords.lat,
        lon: store.coords.lon,
        q: store.city,
        lang: i18n.global.locale.value,
        units: value,
      };

      persistSetting("unit", value);

      store.params = params;
    },
  },
};
</script>
