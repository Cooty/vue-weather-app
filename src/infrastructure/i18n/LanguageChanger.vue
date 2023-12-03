<template>
  <b-form-select
    v-model="i18n.global.locale.value"
    :options="languages"
    @change="changeHandler"
  />
</template>

<script setup>
import langCodes from "./lang-codes";
import store from "../store";
import { persistSetting } from "../../infrastructure/save-settings";
import i18n from "./i18n";

function changeHandler(value) {
  const params = {
    lat: store.coords.lat,
    lon: store.coords.lon,
    q: store.city,
    lang: value,
    units: store.units,
  };

  persistSetting("lang", value);

  store.params = params;
}

const languages = [
  { text: "English", value: langCodes.EN },
  { text: "Deutsch", value: langCodes.DE },
  { text: "Magyar", value: langCodes.HU },
  { text: "български", value: langCodes.BG },
];
</script>
