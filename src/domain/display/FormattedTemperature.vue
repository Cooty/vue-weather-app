<template>
  <span class="text-nowrap"> {{ Math.floor(temp) }}{{ unit }} </span>
</template>

<script>
import store from "../../infrastructure/store";

export default {
  name: "FormattedTemperature",
  props: {
    temp: {
      type: Number,
      required: true,
    },
  },
  computed: {
    unit: function () {
      return store.units === "metric" ? "°C" : "°F";
    },
  },
};
</script>
