class WeatherData {
    constructor(
        temp,
        description,
        feelsLike,
        humidity,
        pressure,
        windSpeed,
        windDeg,
        visibility
    ) {
        this.temp = temp
        this.description = description
        this.feelsLike = feelsLike
        this.humidity = humidity
        this.pressure = pressure
        this.windSpeed = windSpeed
        this.windDeg = windDeg
        this.visibility = visibility
    }

}

export default WeatherData
