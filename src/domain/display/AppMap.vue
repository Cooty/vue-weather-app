<template>
  <div class="app-map">
    <div id="weather-location-map" />
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Coords from "../../infrastructure/model/Coords";
import store from "../../infrastructure/store";

// We have to manually copy all the images that leaflet uses in it's
// NPM package (node_modules/leaflet/dist/images/) to our public/ folder
// and reference them from there. Since node_modules/ is not deployed
// the images will be broken on production unless we add them to our code.
// There's a better way proposed here: https://github.com/PaulLeCam/react-leaflet/issues/453#issuecomment-410450387
// but that doesn't seem to work. So it's gonna be like this for now...
L.Icon.Default.imagePath = "images/leaflet/";

export default {
  name: "AppMap",
  props: {
    coords: {
      type: Coords,
      required: true,
    },
  },
  data() {
    return {
      map: null,
      marker: null,
    };
  },
  watch: {
    coords: function (newVal, oldVal) {
      if (newVal.lat !== oldVal.lat && newVal.lon !== oldVal.lon) {
        const newCoords = new L.LatLng(newVal.lat, newVal.lon);
        this.marker.setLatLng(newCoords);
        this.map.flyTo(newCoords);
      }
    },
  },
  mounted() {
    this.map = L.map("weather-location-map").setView(
      [this.coords.lat, this.coords.lon],
      6
    );

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      dragging: !L.Browser.mobile,
      tap: !L.Browser.mobile,
    }).addTo(this.map);

    this.addMarker(this.coords.lat, this.coords.lon);
  },
  methods: {
    addMarker(lat, lon) {
      this.marker = L.marker([lat, lon], {
        riseOnHover: true,
        draggable: true,
      }).addTo(this.map);

      this.marker.on("dragend", (e) => {
        store.params = {
          q: "",
          lang: this.$i18n.locale,
          units: store.units,
          lat: e.target._latlng.lat,
          lon: e.target._latlng.lng,
        };
      });
    },
  },
};
</script>

<style scoped>
.app-map {
  overflow: hidden;
  position: absolute;
  top: 0;
  right: calc(var(--bs-card-spacer-x) * -1);
  bottom: 0;
  left: calc(var(--bs-card-spacer-x) * -1);
}

#weather-location-map {
  height: 100%;
}

@media screen and (min-width: 768px) {
  .app-map {
    top: calc(var(--bs-card-spacer-y) * -1);
    right: calc(var(--bs-card-spacer-x) * -1);
    bottom: calc(var(--bs-card-spacer-y) * -1);
    left: var(--bs-card-spacer-x);
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
}
</style>
