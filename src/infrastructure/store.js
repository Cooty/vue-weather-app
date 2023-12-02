import { reactive } from "vue";

const store = reactive({
    weatherData: null,
    city: "",
    coords: null,
    isLoading: true,
    isError: false,
    errorMessage: "",
    units: "metric",
    theme: "light",
    params: {},
});

export default store;
