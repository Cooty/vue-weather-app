import store from "./store";
import WeatherData from "./model/WeatherData";
import Coords from "./model/Coords";

describe("an object for storing data that's globally accessible", () => {
    it("can store the weather data", () => {
        const weatherData = new WeatherData(20.4, "cloudy", "18", "56", 1000);

        store.weatherData = weatherData;
        expect(store.weatherData).toEqual(weatherData);
    });

    it("can store the city", () => {
        const city = "Budapest";
        store.city = city;
        expect(store.city).toEqual(city);
    });

    it("can store the coordinates", () => {
        const coords = new Coords(40.32323232, -120.344545);
        store.coords = coords;
        expect(store.coords).toEqual(coords);
    });

    it("can store the loading state", () => {
        const loading = true;
        store.isLoading = loading;
        expect(store.isLoading).toEqual(loading);
    });

    it("can store the error state", () => {
        const error = true;
        store.isError = error;
        expect(store.isError).toEqual(error);
    });

    it("can store the error message", () => {
        const errorMessage = "An error happened";
        store.errorMessage = errorMessage;
        expect(store.errorMessage).toEqual(errorMessage);
    });

    it("can set unit types that will be passed to the API", () => {
        // the string values are defined by the API
        // see: https://openweathermap.org/current#data
        expect(store.units).toBe("metric");

        store.units = "imperial";
        expect(store.units).toBe("imperial");
    });
});
