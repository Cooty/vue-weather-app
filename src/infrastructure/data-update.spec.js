import {
    errorHandler,
    setToLoadingState,
    setCityData,
    setCoordsData
} from './data-update'
import WeatherData from './model/WeatherData'
import Coords from './model/Coords'

jest.mock('./environment', () => {
    return {
        MODE: 'prod'
    }
})

const mockWeatherData = new WeatherData(
    20,
    'stuff',
    19,
    60,
    1100
)

// dynamically load the store since it's a singelton so we can modify it in each test-case independently
const getStore = () => {
    return import('./store').then((module) => module.default)
}

describe('A set of functions to handle states that are coupled together', () => {
    it('can set an error state', async () => {
        const store = await getStore()
        const message = 'Some error has happened'
        const e = new Error(message)
        errorHandler(e, store)
        expect(store.state.isError).toBeTruthy()
        expect(store.state.errorMessage).toEqual(message)
    })

    it('can set a loading state', async () => {
        const store = await getStore()
        expect(store.state.isLoading).toBeTruthy()
        setToLoadingState(store)
        expect(store.state.isLoading).toBeTruthy()
        expect(store.state.errorMessage).toEqual('')
        expect(store.state.isError).toBeFalsy()
        expect(store.state.isRightSectionOpened).toBeFalsy()
    })

    it('can set weather data by city', async () => {
        const store = await getStore()
        setCityData(mockWeatherData, 'Budapest', store)
        expect(store.state.weatherData.temp).toBe(20)
        expect(store.state.city).toBe('Budapest')
    })

    it('can set weather data by coordinates', async () => {
        const store = await getStore()
        setCoordsData(mockWeatherData, new Coords(40.121212, -180.2233), store)
        expect(store.state.coords.lat).toBe(40.121212)
        expect(store.state.coords.lon).toBe(-180.2233)
    })
})
