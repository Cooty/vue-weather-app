import Coords from './Coords'

describe('An object to store geographic coordinates', () => {
    it('can save data and retrieve it later', () => {
        const dummyLat = 40.3445
        const dummyLon = -90.1243

        const myCoords = new Coords(dummyLat, dummyLon)

        expect(myCoords.lat).toBe(dummyLat)
        expect(myCoords.lon).toBe(dummyLon)
    })

})
