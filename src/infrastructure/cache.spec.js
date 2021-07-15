import cache from './cache'

const id = 112233434

describe('A module to implement client-side caching', () => {
    it('can make a namespaced key', () => {
        const key = cache.makeKey(id)
        expect(key).toEqual(`_wa_${id}`)
    })

    it('can set and get a piece of data from the cache', () => {
        global.sessionStorage = jest.fn(() => {
            return {
                setItem(key, value) {
                    this[key] = value.toString()
                },
                getItem(key) {
                    return this[key]
                }
            }
        })

        const data = {foo: 'bar', fizz: 'bazz'}
        const key = cache.makeKey(id)

        cache.saveToCache(key, data)
        expect(cache.getFromCache(key)).toEqual(data)
    })
})