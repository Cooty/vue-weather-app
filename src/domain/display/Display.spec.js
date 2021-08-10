import { render } from '@testing-library/vue'
import Display from './Display.vue'
import WeatherData from '../../infrastructure/model/WeatherData'
import Coords from '../../infrastructure/model/Coords'

const dummyTemp = 33
const dummyDescription = 'cloudy'
const dummyFeelsLike = 35
const dummyHumidity = 57
const dummyPressure = 1200
const dummyWeatherData = new WeatherData(
    dummyTemp,
    dummyDescription,
    dummyFeelsLike,
    dummyHumidity,
    dummyPressure
)
const dummyLat = 42.5061
const dummyLon = 27.4678
const dummyCoords = new Coords(dummyLat, dummyLon)
const dummyCity = 'Budapest'
const dummyTranslations = {
    'messages.loading': 'Loading...',
    'messages.humidity': 'Humidity',
    'messages.pressure': 'Pressure',
    'messages.weatherForCoordinates': `The weather for a random coordinate (latitude: ${dummyLat}, longitude: ${dummyLon}) is:`,
    'messages.weatherForCity': `The weather for ${dummyCity} is:`
}
const mocks = {
    $t: (key) => dummyTranslations[key],
    $i18n: {
        locale: 'en'
    }
}

describe('A component for displaying weather data', () => {
    it('renders the weather data', () => {
        const { getByText, container } = render(Display, {
            props: {
                weatherData: dummyWeatherData,
                city: dummyCity
            },
            mocks
        })

        expect(container).toHaveTextContent(dummyTemp.toString())
        expect(getByText(dummyDescription)).toBeVisible()
        expect(container).toHaveTextContent(dummyFeelsLike.toString())
        expect(container).toHaveTextContent(dummyHumidity.toString())
        expect(container).toHaveTextContent(dummyPressure.toString())
    })

    it('displays coordinates when they are passed in', () => {
        const { container } = render(Display, {
            props: {
                weatherData: dummyWeatherData,
                coords: dummyCoords
            },
            mocks
        })

        expect(container).toHaveTextContent(dummyCoords.lat.toString())
        expect(container).toHaveTextContent(dummyCoords.lon.toString())
    })

    it('displays city and country code when they are passed', () => {
        const { container } = render(Display, {
            props: {
                weatherData: dummyWeatherData,
                city: dummyCity
            },
            mocks
        })

        expect(container).toHaveTextContent(dummyCity)
    })
})
