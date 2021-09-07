class WeatherData {
    constructor(
        temp,
        description,
        feelsLike,
        humidity,
        pressure,
        windSpeed,
        windDeg,
        visibility,
        icon
    ) {
        this.temp = temp
        this.description = description
        this.feelsLike = feelsLike
        this.humidity = humidity
        this.pressure = pressure
        this.windSpeed = windSpeed
        this.windDeg = windDeg
        this.visibility = visibility
        this.icon = icon
    }

}

export default WeatherData
