import { API_KEY } from '../environment'

const key = API_KEY
const preferredUnits = 'metric'
const url = 'https://api.openweathermap.org/data'
const version = 2.5
const weatherEndpoint = `${url}/${version}/weather`
const settings = `&appid=${key}&units=${preferredUnits}`

const getApiResponse = async (url) => {
    const response = await fetch(url)
    if(response.status !== 200) {
        throw new Error('We couldn\'t get the weather data for that location')
    }
    return await response.json()
}

export const getWeatherByCoordinates = async (lat, lon, options) => {
    return await getApiResponse(`${weatherEndpoint}?lat=${lat}&lon=${lon}${settings}&lang=${options.lang}`)
}

export const getWeatherByCity = async (city, options) => {
    return await getApiResponse(`${weatherEndpoint}?q=${city}${settings}&lang=${options.lang}`)
}
