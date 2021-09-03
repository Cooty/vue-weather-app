import { render } from '@testing-library/vue'
import Display from './Display.vue'
import WeatherData from '../../infrastructure/model/WeatherData'
import Coords from '../../infrastructure/model/Coords'

const dummyTemp = 33
const dummyDescription = 'cloudy'
const dummyFeelsLike = 35
const dummyHumidity = 57
const dummyPressure = 1200
const dummyWindSpeed = 10
const dummyWindDeg = 335
const dummyVisibility = 10000
const dummyWeatherData = new WeatherData(
    dummyTemp,
    dummyDescription,
    dummyFeelsLike,
    dummyHumidity,
    dummyPressure,
    dummyWindSpeed,
    dummyWindDeg,
    dummyVisibility
)
const dummyLat = 42.5061
const dummyLon = 27.4678
const dummyCoords = new Coords(dummyLat, dummyLon)
const dummyCity = 'Budapest'
const dummyTranslations = {
    'messages.loading': 'Loading...',
    'messages.humidity': 'Humidity',
    'messages.pressure': 'Pressure',
    'messages.weatherForCity': `The weather for ${dummyCity} is:`
}
const mocks = {
    $t: (key) => dummyTranslations[key],
    $n: (n) => n,
    $i18n: {
        locale: 'en'
    }
}

jest.mock('../../infrastructure/environment', () => {
    return {
        API_KEY: '1234abc',
        MODE: 'prod'
    }
})

describe('A component for displaying weather data', () => {
    it('renders the weather data', () => {
        const { getByText, container } = render(Display, {
            props: {
                weatherData: dummyWeatherData,
                city: dummyCity,
                coords: dummyCoords
            },
            mocks
        })

        expect(container).toHaveTextContent(dummyTemp.toString())
        expect(getByText(dummyDescription)).toBeVisible()
        expect(container).toHaveTextContent(dummyFeelsLike.toString())
        expect(container).toHaveTextContent(dummyHumidity.toString())
        expect(container).toHaveTextContent(dummyPressure.toString())
    })

    it('displays the queried place when passed', () => {
        const { container } = render(Display, {
            props: {
                weatherData: dummyWeatherData,
                city: dummyCity,
                coords: dummyCoords
            },
            mocks
        })

        expect(container).toHaveTextContent(dummyCity)
    })
})
