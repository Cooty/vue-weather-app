export const errorHandler = (e, store) => {
    store.isError = true;
    store.errorMessage = e.message;
};

export const setToLoadingState = (store) => {
    store.isLoading = true;
    store.ErrorMessage = "";
    store.isError = false;
};

export const setCityData = (weatherData, coords, city, store) => {
    store.weatherData = weatherData;
    store.coords = coords;
    store.city = city;
};

export const setCoordsData = (weatherData, coords, store) => {
    store.weatherData = weatherData;
    store.coords = coords;
    store.city = "";
};
