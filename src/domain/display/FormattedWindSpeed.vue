<template>
  <span class="text-nowrap">
    <span class="me-1">
      <i-bi-arrow-up :style="`transform: rotate(${windDeg}deg)`" />
    </span>
    {{ n(windSpeed, { maximumFractionDigits: 1 }) }}{{ unit }}
  </span>
</template>

<script>
import { useI18n } from "vue-i18n";
import store from "../../infrastructure/store";

export default {
  name: "FormattedWindSpeed",
  props: {
    windSpeed: {
      type: Number,
      required: true,
    },
    windDeg: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const { n } = useI18n();

    return { n };
  },
  computed: {
    unit: function () {
      return store.units === "metric" ? "m/s" : "mph";
    },
  },
};
</script>
