import store from './store';
import WeatherData from './model/WeatherData';

jest.mock('./environment', () => {
    return {
        MODE: 'prod'
    }
})

describe('an object for storing data that\'s globally accessible', () => {
    it('can store the weather data', () => {
        const weatherData = new WeatherData(
            20.4,
            'cloudy',
            '18',
            '56',
            1000
        )

        store.setWeatherData(weatherData)
        expect(store.state.weatherData).toEqual(weatherData)
    })

    it('can store the city', () => {
        const city = 'Budapest'
        store.setCity(city)
        expect(store.state.city).toEqual(city)
    })

    it('can store the latitude', () => {
        const lat = 40.32323232
        store.setLat(lat)
        expect(store.state.lat).toEqual(lat)
    })

    it('can store the longitude', () => {
        const lon = 120.32323232
        store.setLon(lon)
        expect(store.state.lon).toEqual(lon)
    })

    it('can store the loading state', () => {
        const loading = true
        store.setIsLoading(loading)
        expect(store.state.isLoading).toEqual(loading)
    })

    it('can store the error state', () => {
        const error = true
        store.setIsError(error)
        expect(store.state.isError).toEqual(error)
    })

    it('can store the error message', () => {
        const errorMessage = 'An error happened'
        store.setErrorMessage(errorMessage)
        expect(store.state.errorMessage).toEqual(errorMessage)
    })
})