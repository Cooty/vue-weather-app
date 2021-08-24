<template>
  <div class="app-map">
    <div id="weather-location-map" />
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import Coords from '../../infrastructure/model/Coords'
import store from '../../infrastructure/store';

export default {
  name: "AppMap",
  props: {
    coords: {
      type: Coords,
      required: true
    },
  },
  data() {
    return {
      map: null,
      marker: null,
      appState: store.state
    }
  },
  watch: {
    coords: function(newVal, oldVal) {
      if(newVal.lat !== oldVal.lat && newVal.lon !== oldVal.lon) {
        const newCoords = new L.LatLng(newVal.lat, newVal.lon)
        this.marker.setLatLng(newCoords)
        this.map.flyTo(newCoords)
      }
    }
  },
  mounted() {
    this.map = L
      .map('weather-location-map')
      .setView([this.coords.lat, this.coords.lon], 6)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      dragging: !L.Browser.mobile,
      tap: !L.Browser.mobile
    }).addTo(this.map)

    this.addMarker(this.coords.lat, this.coords.lon)
  },
  methods: {
    addMarker(lat, lon) {
      this.marker = L.marker([lat, lon], {
        riseOnHover: true,
        draggable: true,}).addTo(this.map)

      this.marker.on('dragend', e => {
        this.$bubble('update-weather', {
          q: '',
          lang: this.$i18n.locale,
          units: this.appState.units,
          lat: e.target._latlng.lat,
          lon: e.target._latlng.lng,
        })
      })
    }
  }
}
</script>

<style scoped>
.app-map {
  background: rgba(0, 0, 0, .4);
  min-height: 300px;
  height: 100%;
  margin: 0 -1.25rem -1.25rem -1.25rem;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}

#weather-location-map {
  height: 100%;
}

@media screen and (min-width: 768px) {
  .app-map {
    min-height: 500px;
    margin: -1.25rem -1.25rem -1.25rem 0;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
}
</style>
