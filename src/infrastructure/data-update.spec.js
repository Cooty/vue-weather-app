import {
    errorHandler,
    setToLoadingState,
    setCityData,
    setCoordsData,
} from "./data-update";
import WeatherData from "./model/WeatherData";
import Coords from "./model/Coords";

const mockWeatherData = new WeatherData(
    20,
    "stuff",
    19,
    60,
    1100,
    10,
    335,
    1000,
    "02d"
);

// dynamically load the store since it's a singelton so we can modify it in each test-case independently
const getStore = () => {
    return import("./store").then((module) => module.default);
};

describe("A set of functions to handle states that are coupled together", () => {
    it("can set an error state", async () => {
        const store = await getStore();
        const message = "Some error has happened";
        const e = new Error(message);
        errorHandler(e, store);
        expect(store.isError).toBeTruthy();
        expect(store.errorMessage).toEqual(message);
    });

    it("can set a loading state", async () => {
        const store = await getStore();
        expect(store.isLoading).toBeTruthy();
        setToLoadingState(store);
        expect(store.isLoading).toBeTruthy();
        expect(store.errorMessage).toEqual("");
        expect(store.isError).toBeFalsy();
    });

    it("can set weather data by city", async () => {
        const store = await getStore();
        const dummyCoords = new Coords(42.5061, 27.4678);
        setCityData(mockWeatherData, dummyCoords, "Budapest", store);
        expect(store.weatherData.temp).toBe(20);
        expect(store.city).toBe("Budapest");
    });

    it("can set weather data by coordinates", async () => {
        const store = await getStore();
        setCoordsData(mockWeatherData, new Coords(40.121212, -180.2233), store);
        expect(store.coords.lat).toBe(40.121212);
        expect(store.coords.lon).toBe(-180.2233);
    });
});
