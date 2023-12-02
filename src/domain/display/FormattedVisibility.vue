<template>
  <span class="text-nowrap">
    {{ n(formattedVisibility, { maximumFractionDigits: 1 }) }}{{ unit }}
  </span>
</template>

<script>
import { useI18n } from "vue-i18n";
import store from "../../infrastructure/store";

export default {
  name: "FormattedVisibility",
  props: {
    visibility: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const { n } = useI18n();

    return { n };
  },
  computed: {
    formattedVisibility: function () {
      const divisor = store.units === "metric" ? 1000 : 1609;
      return Number((this.visibility / divisor).toFixed(1));
    },
    unit: function () {
      return store.units === "metric" ? "km" : "mi";
    },
  },
};
</script>
