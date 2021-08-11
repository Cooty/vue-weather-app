import serialize from './serialize'

describe('Helper function to turn an object into a query string', () => {
    it('can make a query string out of an object', () => {
        const obj = {foo: 'foobar', baz: 42, fizz: 'bazz'}
        const queryString = serialize(obj)

        expect(queryString).toEqual('foo=foobar&baz=42&fizz=bazz')
    })

    it('can automatically encode strings to be transported in URLs', () => {
        const obj = {
            hu: 'Árvíztűrő tükörfúrógép',
            bg: 'Родното Черноморие се'
        }
        const queryString = serialize(obj)
        expect(queryString).toEqual(
            'hu=%C3%81rv%C3%ADzt%C5%B1r%C5%91+t%C3%BCk%C3%B6rf%C3%BAr%C3%B3g%C3%A9p&bg=%D0%A0%D0%BE%D0%B4%D0%BD%D0%BE%D1%82%D0%BE+%D0%A7%D0%B5%D1%80%D0%BD%D0%BE%D0%BC%D0%BE%D1%80%D0%B8%D0%B5+%D1%81%D0%B5'
        )
    })
})