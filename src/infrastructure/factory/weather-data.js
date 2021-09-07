import WeatherData from '../model/WeatherData'

export const makeWeatherData = (response) => {
    const {main, weather, wind, visibility} = response

    if(
        !main ||
        !weather ||
        !weather[0] ||
        !weather[0].description ||
        !main.feels_like ||
        !main.humidity ||
        !main.pressure ||
        !wind ||
        !wind.speed ||
        !wind.deg ||
        !visibility ||
        !weather[0].icon
    ) {
        throw new Error('Can\'t find all the necessary data in the API response')
    }

    return new WeatherData(
        main.temp,
        weather[0].description,
        main.feels_like,
        main.humidity,
        main.pressure,
        wind.speed,
        wind.deg,
        visibility,
        weather[0].icon
    )
}
