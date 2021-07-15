import { getWeatherByCityAndCountry, getWeatherByCoordinates } from './api'
import successResponse from './mocks/weather-success'

jest.mock('../../infrastructure/environment', () => {
    return {
        API_KEY: '1234abc'
    };
});

describe('Fetches weather data from OpenWeatherMaps API', () => {
    it('Fetches weather data for a city and country which contains all the necessary fields that we\'re using', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                status: 200,
                json: () => Promise.resolve(successResponse),
            })
        );

        const weatherResults = await getWeatherByCityAndCountry('Burgas', 'BG')

        expect(weatherResults.main.temp).toEqual(24.06)
        expect(weatherResults.main.feels_like).toEqual(24.32)
        expect(weatherResults.main.pressure).toEqual(1011)
        expect(weatherResults.main.humidity).toEqual(69)
        expect(weatherResults.weather[0].description).toEqual('few clouds')
        expect(fetch).toHaveBeenCalledTimes(1);
    })

    it('Getting the weather by the city, throws an error if the request is not successful', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                status: 500,
                json: () => Promise.resolve({}),
            })
        );
        try {
            await getWeatherByCityAndCountry('Burgas', 'BA')
        } catch (e) {
            expect(e instanceof Error).toBe(true)
            expect(e.message).toBe('We couldn\'t get the weather data for that location')
        }

    })

    it('Getting the weather by the city, throws an error if the city is not found', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                status: 404,
                json: () => Promise.resolve({
                    "cod": "404",
                    "message": "city not found"
                }),
            })
        );
        try {
            await getWeatherByCityAndCountry('Narnia', 'NA')
        } catch (e) {
            expect(e instanceof Error).toBe(true)
            expect(e.message).toBe('We couldn\'t get the weather data for that location')
        }

    })

    it('Fetches weather data for a longitude and latitude coordinate-pair which contains all the necessary fields that we\'re using', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                status: 200,
                json: () => Promise.resolve(successResponse),
            })
        );

        const weatherResults = await getWeatherByCoordinates(47.9291607, 20.3213702)

        expect(weatherResults.main.temp).toEqual(24.06)
        expect(weatherResults.main.feels_like).toEqual(24.32)
        expect(weatherResults.main.pressure).toEqual(1011)
        expect(weatherResults.main.humidity).toEqual(69)
        expect(weatherResults.weather[0].description).toEqual('few clouds')
        expect(fetch).toHaveBeenCalledTimes(1);
    })

    it('Getting the weather by the coordinates, throws an error if the request is not successful', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                status: 500,
                json: () => Promise.resolve({}),
            })
        );
        try {
            await getWeatherByCoordinates(47.9291607, 20.3213702)
        } catch (e) {
            expect(e instanceof Error).toBe(true)
            expect(e.message).toBe('We couldn\'t get the weather data for that location')
        }

    })

    it('Getting the weather by coordinates, throws an error if the coordinates are not valid', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                status: 400,
                json: () => Promise.resolve({
                    "cod": "400",
                    "message": "wrong latitude"
                }),
            })
        );
        try {
            await getWeatherByCoordinates(-47888, 0)
        } catch (e) {
            expect(e instanceof Error).toBe(true)
            expect(e.message).toBe('We couldn\'t get the weather data for that location')
        }

    })
})