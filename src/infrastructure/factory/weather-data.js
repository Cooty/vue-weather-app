import WeatherData from '../model/WeatherData'

export const makeWeatherData = (response) => {
    const {main, weather} = response

    if(
        !main ||
        !weather ||
        !weather[0] ||
        !weather[0].description ||
        !main.feels_like ||
        !main.humidity ||
        !main.pressure
    ) {
        throw new Error('Can\'t find all the necessary data in the API response')
    }

    return new WeatherData(
        main.temp,
        weather[0].description,
        main.feels_like,
        main.humidity,
        main.pressure
    )
}
