import { API_KEY } from '../environment'
import serialize from '../../utils/serialize'

const key = API_KEY
const preferredUnits = 'metric'
const url = 'https://api.openweathermap.org/data'
const version = 2.5
const weatherEndpoint = `${url}/${version}/weather`
const fixedParams = `&appid=${key}&units=${preferredUnits}`

const getApiResponse = async (url) => {
    const response = await fetch(url)
    if(response.status !== 200) {
        throw new Error('messages.error')
    }
    return await response.json()
}

export const getWeather = async (params) => {
    return await getApiResponse(`
        ${weatherEndpoint}?${serialize(params)}${fixedParams}`
    )
}
