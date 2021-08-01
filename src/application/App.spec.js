import {render} from '@testing-library/vue'
import App from './App.vue'
import successResponse from '../domain/query/mocks/weather-success';
import WeatherData from '../infrastructure/model/WeatherData';
// import i18n from '../infrastructure/i18n/i18n'

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
}
const mocks = {
    $t: (key) => dummyTranslations[key],
    $i18n: {
        locale: 'en'
    }
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
        const dummyErrorMessage = 'Some error has happened'
        const { getByText } = render(App, {
            data: () => ({
                appState: {
                    isError: true,
                    errorMessage: dummyErrorMessage
                }
            }),
            mocks
        })

        expect(getByText(dummyErrorMessage)).toBeVisible()
    })

    it('displays the weather when the data indicates', () => {
        const dummyTemp = 33
        const dummyDescription = 'cloudy'
        const dummyFeelsLike = 35
        const dummyHumidity = 57
        const dummyPressure = 1200
        const { getByText } = render(App, {
            data: () => ({
                appState: {
                    weatherData: new WeatherData(
                        dummyTemp,
                        dummyDescription,
                        dummyFeelsLike,
                        dummyHumidity,
                        dummyPressure
                    )
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