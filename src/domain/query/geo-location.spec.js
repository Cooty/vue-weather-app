import getLocation from './get-location'
import mockPosition from './mocks/GeolocationPosition'

// TODO:Figure out how to mock this
describe.skip('A function to asynchronously get the location data', () => {
    it('returns a geolocation position', async () => {

        global.navigator.geolocation = {
            getCurrentPosition: (resolve, reject, options)=> {
                return mockPosition
            }
        }
        const options = {
            enableHighAccuracy: true,
            timeout: 1000,
            maximumAge: 0
        }
        const location = await getLocation(options)
        expect(location.coords.latitude).toBe(52.5729792)
    })
})