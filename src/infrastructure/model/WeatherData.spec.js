import WeatherData from './WeatherData'

describe('An object to store weather data', () => {
    it('can save data in it and we can retrieve that later', () => {
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

        expect(dummyWeatherData.temp).toBe(dummyTemp)
        expect(dummyWeatherData.description).toBe(dummyDescription)
        expect(dummyWeatherData.feelsLike).toBe(dummyFeelsLike)
        expect(dummyWeatherData.humidity).toBe(dummyHumidity)
        expect(dummyWeatherData.pressure).toBe(dummyPressure)
    })
})
