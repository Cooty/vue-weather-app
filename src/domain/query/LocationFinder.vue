<template>
  <button
    v-if="isGeolocationSupported"
    v-b-tooltip="$t('messages.locationTooltip')"
    class="location-finder text-primary h5 mb-0"
    type="button"
    @click.prevent="clickHandler"
  >
    <b-icon-geo-alt />
  </button>
</template>

<script>
// TODO: Add test for this
import { BIconGeoAlt } from 'bootstrap-vue'
import getLocation from './get-location'
import store from '../../infrastructure/store'

export default {
  name: 'LocationFinder',
  components: {
    BIconGeoAlt
  },
  computed: {
    isGeolocationSupported: () => navigator && 'geolocation' in navigator
  },
  methods: {
    async clickHandler(e) {
      try {
        const options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
        const location = await getLocation(options)

        this.$bubble('update-weather', {
          q: '',
          lang: this.$i18n.locale,
          units: store.state.units,
          lat: location.coords.latitude,
          lon: location.coords.longitude
        })
      } catch (e) {
        console.warn(e)
      } finally {
        e.target.blur()
      }
    }
  }
}
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