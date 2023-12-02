<template>
  <button
    v-if="isGeolocationSupported"
    v-b-tooltip.hover="t('messages.locationTooltip')"
    class="location-finder text-primary h5 mb-0"
    type="button"
    @click.prevent="clickHandler"
  >
    <i-bi-geo-alt />
  </button>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
// TODO: Add test for this
import getLocation from "./get-location";
import store from "../../infrastructure/store";
import i18n from "../../infrastructure/i18n/i18n";

const { t } = useI18n();

const isGeolocationSupported = computed(
  () => navigator && "geolocation" in navigator
);

const clickHandler = async (e) => {
  try {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    const location = await getLocation(options);

    store.params = {
      q: "",
      lang: i18n.global.locale.value,
      units: store.units,
      lat: location.coords.latitude,
      lon: location.coords.longitude,
    };
  } catch (e) {
    console.error(e);
  } finally {
    e.target.blur();
  }
};
</script>

<style scoped>
.location-finder {
  background: none;
  border: 0;
  padding: 0.5rem;
  display: block;
  cursor: pointer;
}
</style>
