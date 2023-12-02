<template>
  <b-card
    tag="article"
    class="app-display shadow"
    :class="store.theme === 'light' ? '' : 'bg-secondary'"
  >
    <b-row class="display-row w-100 h-100">
      <b-col :cols="12" :md="6" class="pb-3 pb-md-0">
        <template v-if="city">
          <text-row :bold="true">
            {{ t("messages.weatherForCity", { city }) }}
          </text-row>
        </template>
        <div class="d-flex flex-nowrap justify-content-between">
          <h1 class="h2">
            <weather-condition-icon :icon-code="weatherData.icon" />
            <formatted-temperature :temp="weatherData.temp" />
          </h1>
          <div>
            <b-badge variant="info">
              {{ weatherData.description }}
            </b-badge>
          </div>
        </div>
        <text-row>
          {{ t("messages.feelsLike") }}
          <formatted-temperature :temp="weatherData.feelsLike" />
        </text-row>
        <divider />
        <text-row :muted="true">
          {{ t("messages.humidity") }}: {{ weatherData.humidity }}%
        </text-row>
        <text-row :muted="true">
          {{ t("messages.pressure") }}: {{ weatherData.pressure }}hPa
        </text-row>
        <text-row :muted="true">
          {{ t("messages.windSpeed") }}:
          <formatted-wind-speed
            :wind-speed="weatherData.windSpeed"
            :wind-deg="weatherData.windDeg"
          />
        </text-row>
        <text-row :muted="true" :no-bottom-margin="true">
          {{ t("messages.visibility") }}:
          <formatted-visibility :visibility="weatherData.visibility" />
        </text-row>
      </b-col>
      <b-col :cols="12" :md="6" class="map-container position-relative">
        <app-map :coords="coords" />
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { useI18n } from "vue-i18n";
import TextRow from "../../ui/TextRow.vue";
import Divider from "../../ui/Divider.vue";
import FormattedTemperature from "./FormattedTemperature.vue";
import WeatherData from "../../infrastructure/model/WeatherData";
import Coords from "../../infrastructure/model/Coords";
import store from "../../infrastructure/store";
import AppMap from "./AppMap.vue";
import FormattedWindSpeed from "./FormattedWindSpeed.vue";
import FormattedVisibility from "./FormattedVisibility.vue";
import WeatherConditionIcon from "./WeatherConditionIcon.vue";

export default {
  name: "Display",
  components: {
    TextRow,
    Divider,
    FormattedTemperature,
    AppMap,
    FormattedWindSpeed,
    FormattedVisibility,
    WeatherConditionIcon,
  },
  props: {
    weatherData: {
      type: WeatherData,
      required: true,
    },
    coords: {
      type: Coords,
      required: true,
    },
    city: {
      type: String,
      default: "",
    },
  },
  setup() {
    const { t } = useI18n();
    return { store, t };
  },
};
</script>

<style scoped>
.theme-dark .app-display .text-row.text-muted {
  color: var(--bs-gray-300) !important;
}

.app-display .map-container {
  height: 50vh;
}

.app-display .display-row {
  margin: 0;
}

@media screen and (max-width: 767px) {
  .app-display {
    box-shadow: none !important;
    border-radius: 0;
    background: transparent !important;
    border: 0;
    margin-left: calc((var(--bs-gutter-x) * 0.5) * -1);
    margin-right: calc((var(--bs-gutter-x) * 0.5) * -1);
    height: calc(100vh - var(--bottom-bar-height) * 2);
  }

  .app-display :deep(.card-body) {
    padding-bottom: 0;
  }

  .app-display .map-container {
    height: auto;
    flex: 1;
  }

  .app-display .display-row {
    flex-direction: column;
  }

  .theme-dark .app-display .text-row.text-muted {
    color: var(--bs-gray-500) !important;
  }
}
</style>
