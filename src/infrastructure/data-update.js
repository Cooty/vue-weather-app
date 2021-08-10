export const errorHandler = (e, store) => {
    store.setIsError(true)
    store.setErrorMessage(e.message)
}

export const setToLoadingState = (store) => {
    store.setIsLoading(true)
    store.setErrorMessage('')
    store.setIsError(false)
    store.setIsRightSectionOpened(false)
}

export const setCityData = (weatherData, city, store) => {
    store.setWeatherData(weatherData)
    store.setCoords(null)
    store.setCity(city)
}

export const setCoordsData = (weatherData, coords, store) => {
    store.setWeatherData(weatherData)
    store.setCoords(coords)
}
