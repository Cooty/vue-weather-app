<template>
  <b-form-select v-model="lang" :options="languages" @change="changeHandler" />
</template>

<script>
import { BFormSelect } from "bootstrap-vue";
import langCodes from "./lang-codes";
import store from "../store";
import { persistSetting } from "../../infrastructure/save-settings";
import i18n from "./i18n";

export default {
  name: "LanguageChanger",
  components: {
    BFormSelect,
  },
  data() {
    return {
      lang: i18n.locale,
      languages: [
        { text: "English", value: langCodes.EN },
        { text: "Deutsch", value: langCodes.DE },
        { text: "Magyar", value: langCodes.HU },
        { text: "български", value: langCodes.BG },
      ],
    };
  },
  methods: {
    changeHandler(value) {
      const params = {
        lat: store.state.coords.lat,
        lon: store.state.coords.lon,
        q: store.state.city,
        lang: value,
        units: store.state.units,
      };

      i18n.locale = value;

      persistSetting("lang", value);

      this.$bubble("update-weather", params);
    },
  },
};
</script>
