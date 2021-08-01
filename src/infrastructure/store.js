import WeatherData from './model/WeatherData'
import { MODE } from './environment'

const store = {
    debug: MODE === 'development',
    state: {
        weatherData: new WeatherData(),
        city: '',
        lat: 0,
        lon: 0,
        isLoading: true,
        isError: false,
        errorMessage: ''
    },
    setWeatherData(newValue) {
        if(this.debug) console.log('setWeatherDataAction triggered with', newValue)
        this.state.weatherData = newValue
    },
    setCity(newValue) {
        if(this.debug) console.log('setCity triggered with', newValue)
        this.state.city = newValue
    },
    setLat(newValue) {
        if(this.debug) console.log('setLat triggered with', newValue)
        this.state.lat = newValue
    },
    setLon(newValue) {
        if(this.debug) console.log('setLon triggered with', newValue)
        this.state.lon = newValue
    },
    setIsLoading(newValue) {
        if(this.debug) console.log('setIsLoading triggered with', newValue)
        this.state.isLoading = newValue
    },
    setIsError(newValue) {
        if(this.debug) console.log('setIsError triggered with', newValue)
        this.state.isError = newValue
    },
    setErrorMessage(newValue) {
        if(this.debug) console.log('setErrorMessage triggered with', newValue)
        this.state.errorMessage = newValue
    }
}

Object.freeze(store)

export default store