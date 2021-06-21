import getRandomCoordinates from './get-random-coordinates'
describe('A helper function to generate random geographical coordinates', () => {
    it('returns an object with a lon and lat key', () => {
        const coords = getRandomCoordinates();

        expect(typeof coords === 'object').toBeTruthy()
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
})