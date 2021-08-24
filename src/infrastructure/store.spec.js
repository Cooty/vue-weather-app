import store from './store'
import WeatherData from './model/WeatherData'
import Coords from './model/Coords'

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

    it('can store the coordinates', () => {
        const coords = new Coords(40.32323232, -120.344545)
        store.setCoords(coords)
        expect(store.state.coords).toEqual(coords)
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

    it('can store the ui state of the settings dropdown in the header', () => {
        // should be false by default
        expect(store.state.isRightSectionOpened).toBe(false)

        store.setIsRightSectionOpened(true)
        expect(store.state.isRightSectionOpened).toBe(true)
    })

    it('can set unit types that will be passed to the API', () => {
        // the string values are defined by the API
        // see: https://openweathermap.org/current#data
        expect(store.state.units).toBe('metric')

        store.setUnits('imperial')
        expect(store.state.units).toBe('imperial')
    })
})