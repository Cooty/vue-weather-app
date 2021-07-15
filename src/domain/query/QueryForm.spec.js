import {fireEvent, render} from '@testing-library/vue'
import QueryForm from './QueryForm.vue'
import getRandomCoordinates from './get-random-coordinates'
import { getWeatherByCoordinates, getWeatherByCityAndCountry } from './api'

jest.mock('../../infrastructure/environment', () => {
    return {
        API_KEY: '1234abc',
        MODE: 'prod'
    }
})

jest.mock('./get-random-coordinates')

jest.mock('./api', () => {
    return {
        getWeatherByCoordinates: jest.fn().mockImplementation(async () => {
            const { default: successResponse } = await import('./mocks/weather-success');

            return successResponse;
        }),
        getWeatherByCityAndCountry: jest.fn().mockImplementation(async () => {
            const { default: successResponse } = await import('./mocks/weather-success');

            return successResponse;
        })
    };
});

describe('A component for querying weather data', () => {
    it('calls the API with random coordinates and the form is in the default state', () => {
        const lat = 47.9291607
        const lon = 20.3213702
        getRandomCoordinates.mockImplementation(() => {
            return {lat, lon}
        })

        const { getByText, getByPlaceholderText, getByDisplayValue } = render(QueryForm)

        expect(getRandomCoordinates).toHaveBeenCalledTimes(1)
        expect(getWeatherByCoordinates).toHaveBeenCalledTimes(1)
        expect(getWeatherByCoordinates).toHaveBeenCalledWith(lat, lon)
        expect(getByText('Check the weather!')).toBeDisabled()
        expect(getByPlaceholderText('Type your city')).toBeVisible()
        expect(getByDisplayValue('Select a country')).toBeVisible()
    })

    it('calls the API with a given city and country when submitting the form', async () => {
        const { getByText, getByPlaceholderText, getByDisplayValue } = render(QueryForm)
        const city = 'Budapest'
        const country = 'HU'

        const cityInput = getByPlaceholderText('Type your city')
        await fireEvent.update(cityInput, city)
        const countrySelect = getByDisplayValue('Select a country')
        await fireEvent.update(countrySelect, country)
        const button = getByText('Check the weather!')
        expect(button).toBeEnabled()
        await fireEvent.click(button)
        expect(getWeatherByCityAndCountry).toHaveBeenCalledTimes(1)
        expect(getWeatherByCityAndCountry).toHaveBeenCalledWith(city, country)
    })
})
