<template>
  <b-form
    class="position-relative d-flex flex-row align-items-center flex-wrap"
    @submit.prevent="submitHandler"
  >
    <label class="visually-hidden" for="input-city">
      {{ t("messages.cityLabel") }}
    </label>
    <b-form-input
      id="input-city"
      v-model="cityInput"
      name="city"
      class="query-form-input"
      :placeholder="t('messages.cityPlaceholder')"
      required
    />
    <b-button
      type="submit"
      class="query-form-submit"
      variant="primary"
      :disabled="!valid || store.isLoading"
      :aria-label="t('messages.submit')"
    >
      <i-bi-search />
    </b-button>
    <div class="location-finder-container">
      <location-finder />
    </div>
  </b-form>
</template>

<script>
import getRandomCoordinates from "../../infrastructure/get-random-coordinates";
import store from "../../infrastructure/store";
import LocationFinder from "./LocationFinder.vue";
import i18n from "../../infrastructure/i18n/i18n";
import { useI18n } from "vue-i18n";

export default {
  name: "QueryForm",
  components: {
    LocationFinder,
  },
  props: {
    city: {
      type: String,
      default: "",
    },
  },
  setup() {
    const { t } = useI18n();
    return { store, t };
  },
  data() {
    return {
      cityInput: this.city,
    };
  },
  computed: {
    valid() {
      return this.cityInput;
    },
  },
  watch: {
    city: function (newVal, _) {
      if (!newVal) {
        this.cityInput = "";
      }
    },
  },
  mounted() {
    const coords = getRandomCoordinates();

    store.params = {
      lat: coords.lat,
      lon: coords.lon,
      lang: i18n.locale,
      units: store.units,
    };
  },
  methods: {
    submitHandler() {
      store.params = {
        q: this.cityInput,
        lang: this.$i18n.locale,
        units: store.units,
      };
    },
  },
};
</script>

<style scoped>
.query-form-input {
  flex: 1;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right-width: 0;
}

.query-form-submit {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.location-finder-container {
  position: absolute;
  z-index: 2;
  right: 54px;
}
</style>
