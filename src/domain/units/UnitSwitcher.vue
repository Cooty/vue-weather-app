<template>
  <div
    class="rounded"
    :class="
      appState.theme === 'dark' ? 'bg-dark-form-control-border' : 'bg-white'
    "
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
      <b-form-radio value="metric" data-testid="metric">
        <span class="d-none d-md-inline">{{ $t("messages.metric") }}: </span>°C
      </b-form-radio>
      <b-form-radio value="imperial" data-testid="imperial">
        <span class="d-none d-md-inline"> {{ $t("messages.imperial") }}: </span
        >°F
      </b-form-radio>
    </b-form-radio-group>
  </div>
</template>

<script>
import { BFormRadioGroup, BFormRadio } from "bootstrap-vue";
import store from "../../infrastructure/store";
import { persistSetting } from "../../infrastructure/save-settings";
import i18n from "../../infrastructure/i18n/i18n";

export default {
  name: "UnitSwitcher",
  components: {
    BFormRadioGroup,
    BFormRadio,
  },
  data() {
    return {
      appState: store.state,
    };
  },
  methods: {
    changeHandler(value) {
      const params = {
        lat: store.state.coords.lat,
        lon: store.state.coords.lon,
        q: store.state.city,
        lang: i18n.locale,
        units: value,
      };

      persistSetting("unit", value);

      this.$bubble("update-weather", params);
    },
  },
};
</script>
