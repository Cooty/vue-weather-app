import getRandomCoordinates from './get-random-coordinates'
import Coords from './model/Coords';

describe('A helper function to generate random geographical coordinates', () => {
    it('returns an object with a lon and lat key', () => {
        const coords = getRandomCoordinates();

        expect(coords instanceof Coords).toBeTruthy()
        expect(coords).toHaveProperty('lat')
        expect(coords).toHaveProperty('lon')
    })

    it('should return lat and lon values as floats', () => {
        const coords = getRandomCoordinates();
        const isFloat = (n) => Number(n) === n && n % 1 !== 0

        expect(typeof coords.lat === 'number' && !isNaN(coords.lat)).toBeTruthy()
        expect(typeof coords.lon === 'number' && !isNaN(coords.lon)).toBeTruthy()

        expect(isFloat(coords.lon)).toBeTruthy()
        expect(isFloat(coords.lat)).toBeTruthy()
    })

    it('should have the proper format for the coordinates', () => {
        const { lat, lon } = getRandomCoordinates();

        // see: https://stackoverflow.com/questions/15965166/what-are-the-lengths-of-location-coordinates-latitude-and-longitude
        expect(lat <= 90 && -90 <= lat).toBeTruthy()
        expect(lon <= 180 && -180 <= lon).toBeTruthy()
    })
})