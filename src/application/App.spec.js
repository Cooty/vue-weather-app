import {render} from '@testing-library/vue'
import App from './App.vue'
import successResponse from '../infrastructure/api/mocks/weather-success'
import WeatherData from '../infrastructure/model/WeatherData'
import store from '../infrastructure/store'
import Coords from '../infrastructure/model/Coords';

jest.mock('../infrastructure/environment', () => {
    return {
        API_KEY: '1234abc'
    };
});

global.fetch = jest.fn(() =>
    Promise.resolve({
        status: 200,
        json: () => Promise.resolve(successResponse),
    })
);

const dummyTranslations = {
    'messages.loading': 'Loading...',
    'messages.humidity': 'Humidity',
    'messages.pressure': 'Pressure',
    'messages.error': 'We couldn\'t get the weather data for that location'
}
const mocks = {
    $t: (key) => dummyTranslations[key],
    $n: (n) => n,
    $i18n: {
        locale: 'en'
    },
    $bubble: jest.fn()
}

describe('The main component for displaying the application', () => {
    it('displays a loading state when the data indicates', () => {
        const { getByTitle } = render(App, {
            data: () => ({
                appState: {
                    isLoading: true
                }
            }),
            mocks,
        })

        expect(getByTitle('Loading...')).toBeVisible()
    })

    it('displays an error state when the data indicates', () => {
        const dummyErrorMessage = 'messages.error'
        store.setIsLoading(false)
        const { getByText } = render(App, {
            data: () => ({
                appState: {
                    isError: true,
                    errorMessage: dummyErrorMessage
                }
            }),
            mocks
        })

        expect(getByText(dummyTranslations['messages.error'])).toBeVisible()
    })

    it('displays the weather when the data indicates', () => {
        const dummyTemp = 33
        const dummyDescription = 'cloudy'
        const dummyFeelsLike = 35
        const dummyHumidity = 57
        const dummyPressure = 1200
        const coords = new Coords(40.121212, -180.2233)
        const dummyWindSpeed = 10
        const dummyWindDeg = 335
        const dummyVisibility = 10000
        const { getByText } = render(App, {
            data: () => ({
                appState: {
                    weatherData: new WeatherData(
                        dummyTemp,
                        dummyDescription,
                        dummyFeelsLike,
                        dummyHumidity,
                        dummyPressure,
                        dummyWindSpeed,
                        dummyWindDeg,
                        dummyVisibility
                    ),
                    city: 'Budapest',
                    coords
                }
            }),
            mocks
        })

        expect(getByText(`${dummyTemp}°C`)).toBeVisible()
        expect(getByText(dummyDescription)).toBeVisible()
        expect(getByText(`${dummyFeelsLike}°C`)).toBeVisible()
        expect(getByText(`Humidity: ${dummyHumidity}%`)).toBeVisible()
        expect(getByText(`Pressure: ${dummyPressure}hPa`)).toBeVisible()
    })
})