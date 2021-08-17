import { MODE } from './environment'

const store = {
    debug: MODE === 'development',
    state: {
        weatherData: null,
        city: '',
        coords: null,
        isLoading: true,
        isError: false,
        errorMessage: '',
        isRightSectionOpened: false,
        units: 'metric',
        theme: 'light'
    },
    setWeatherData(newValue) {
        if(this.debug) console.log('setWeatherDataAction triggered with', newValue)
        this.state.weatherData = newValue
    },
    setCity(newValue) {
        if(this.debug) console.log('setCity triggered with', newValue)
        this.state.city = newValue
    },
    setCoords(newValue) {
        if(this.debug) console.log('setCoords triggered with', newValue)
        this.state.coords = newValue
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
    },
    setIsRightSectionOpened(newValue) {
        if(this.debug) console.log('setIsRightSectionOpened triggered with', newValue)
        this.state.isRightSectionOpened = newValue
    },
    setUnits(newValue) {
        if(this.debug) console.log('setUnits triggered with', newValue)
        this.state.units = newValue
    },
    setTheme(newValue) {
        if(this.debug) console.log('setUnits triggered with', newValue)
        this.state.theme = newValue
    }
}

Object.freeze(store)

export default store