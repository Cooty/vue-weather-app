import WeatherData from '../model/WeatherData';
import {makeWeatherData} from './weather-data';
import weatherSuccess from '../../domain/query/mocks/weather-success';

describe('A factory for the WeatherData model', () => {
    it('throws an error if insufficient data is passed', () => {
        expect(() => {makeWeatherData({})}).toThrowError()
    })

    it('return the data model object when sufficient data is passed', () => {
        const weatherData = makeWeatherData(weatherSuccess)

        expect(weatherData instanceof WeatherData).toBeTruthy()
    })
})
