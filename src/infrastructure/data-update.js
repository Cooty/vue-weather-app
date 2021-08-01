import WeatherData from './model/WeatherData';

export const makeWeatherData = (response) => {
    return new WeatherData(
        response.main.temp,
        response.weather[0].description,
        response.main.feels_like,
        response.main.humidity,
        response.main.pressure
    )
}

export const errorHandler = (e, store) => {
    store.setIsError(true)
    store.setErrorMessage(e.message)
}

export const setToLoadingState = (store) => {
    store.setIsLoading(true)
    store.setErrorMessage('')
    store.setIsError(false)
}

export const setCityData = (weatherData, city, store) => {
    store.setWeatherData(weatherData)
    store.setLat(0)
    store.setLon(0)
    store.setCity(city)
}

export const setCoordsData = (weatherData, coords, store) => {
    store.setWeatherData(weatherData)
    store.setLat(coords.lat)
    store.setLon(coords.lon)
}
