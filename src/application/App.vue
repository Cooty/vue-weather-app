<template>
  <app-main :theme="store.theme">
    <app-header>
      <template #left>
        <query-form :city="store.city" />
      </template>
      <template #right>
        <ul
          class="mb-0 list-unstyled d-flex w-100 align-items-center justify-content-center"
        >
          <li class="me-3 mx-lg-3">
            <theme-switcher />
          </li>
          <li class="me-3">
            <unit-switcher />
          </li>
          <li>
            <language-changer />
          </li>
        </ul>
      </template>
    </app-header>

    <app-content>
      <wrapper>
        <template
          v-if="store.weatherData && !store.isLoading && !store.isError"
        >
          <display
            :weather-data="store.weatherData"
            :city="store.city"
            :coords="store.coords"
          />
        </template>
        <template v-else-if="store.isLoading">
          <div class="text-center">
            <b-spinner
              :title="t('messages.loading')"
              variant="primary"
              :label="t('messages.loading')"
            />
          </div>
        </template>
        <template v-else-if="store.isError">
          <b-alert show variant="danger">
            {{ t(store.errorMessage) }}
          </b-alert>
        </template>
      </wrapper>
    </app-content>
  </app-main>
</template>

<script setup>
import { watch } from "vue";
import { useI18n } from "vue-i18n";
import QueryForm from "../domain/query/QueryForm.vue";
import Display from "../domain/display/Display.vue";
import store from "../infrastructure/store";
import Wrapper from "../ui/Wrapper.vue";
import AppMain from "../ui/AppMain.vue";
import AppHeader from "../ui/AppHeader.vue";
import AppContent from "../ui/AppContent.vue";
import LanguageChanger from "../infrastructure/i18n/LanguageChanger.vue";
import { getWeather } from "../infrastructure/api/api";
import { makeWeatherData } from "../infrastructure/factory/weather-data";
import {
  errorHandler,
  setCityData,
  setCoordsData,
  setToLoadingState,
} from "../infrastructure/data-update";
import cache from "../infrastructure/cache";
import serialize from "../utils/serialize";
import Coords from "../infrastructure/model/Coords";
import UnitSwitcher from "../domain/units/UnitSwitcher.vue";
import ThemeSwitcher from "../domain/theme/ThemeSwitcher.vue";

const { t } = useI18n();

const onUpdateWeatherHandler = async (params) => {
  setToLoadingState(store);
  try {
    const cacheKey = serialize(params);
    const cachedResponse = cache.getFromCache(cacheKey);
    let weatherApiResponse;

    if (cachedResponse) {
      weatherApiResponse = cachedResponse;
    } else {
      weatherApiResponse = await getWeather(params);

      cache.saveToCache(cacheKey, weatherApiResponse);
    }

    const weatherData = makeWeatherData(weatherApiResponse);
    const coords = new Coords(
      weatherApiResponse.coord.lat,
      weatherApiResponse.coord.lon
    );

    if (params.q) {
      setCityData(weatherData, coords, params.q, store);
    } else {
      setCoordsData(weatherData, coords, store);
    }

    store.units = params.units;
  } catch (e) {
    errorHandler(e, store);
  } finally {
    store.isLoading = false;
  }
};

watch(
  () => store.params,
  (newParams, _) => {
    onUpdateWeatherHandler(newParams);
  }
);
</script>
