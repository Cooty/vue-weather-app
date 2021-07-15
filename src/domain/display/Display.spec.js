import { render } from '@testing-library/vue'
import Display from './Display.vue'
import WeatherData from '../../infrastructure/model/WeatherData';

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

describe('A component for displaying weather data', () => {
    it('renders the weather data', () => {
        const { getByText, container } = render(Display, {
            props: {
                weatherData: dummyWeatherData
            }
        })

        expect(container).toHaveTextContent(dummyTemp.toString())
        expect(getByText(dummyDescription)).toBeVisible()
        expect(container).toHaveTextContent(dummyFeelsLike.toString())
        expect(container).toHaveTextContent(dummyHumidity.toString())
        expect(container).toHaveTextContent(dummyPressure.toString())
    })

    it('displays coordinates when they are passed in', () => {
        const lat = 42.5061
        const lon = 27.4678
        const { container } = render(Display, {
            props: {
                weatherData: dummyWeatherData,
                lat,
                lon
            }
        })

        expect(container).toHaveTextContent(lat.toString())
        expect(container).toHaveTextContent(lon.toString())
    })

    it('displays city and country code when they are passed', () => {
        const city = 'Budapest';
        const countryCode = 'hu';
        const { container } = render(Display, {
            props: {
                weatherData: dummyWeatherData,
                city,
                countryCode
            }
        })

        expect(container).toHaveTextContent(city)
        expect(container).toHaveTextContent(new RegExp(countryCode, 'i'))
    })
})
