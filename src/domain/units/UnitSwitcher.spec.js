import {fireEvent, render} from '@testing-library/vue'
import UnitSwitcher from './UnitSwitcher.vue'
import store from '../../infrastructure/store'
import Coords from '../../infrastructure/model/Coords'

jest.mock('../../infrastructure/environment', () => {
    return {
        API_KEY: '1234abc',
        MODE: 'prod'
    }
})

const metricEn = 'Metric'
const imperialEn = 'Imperial'

const dummyTranslations = {
    'messages.metric': metricEn,
    'messages.imperial': imperialEn
}

const mockBubble = jest.fn(() => undefined).mockName('bubbles')

const mocks = {
    $t: (key) => dummyTranslations[key],
    $n: (n) => n,
    $i18n: {
        locale: 'en'
    },
    $bubble: mockBubble
}

describe('Renders a switch to toggle units', () => {
    it('displays both type of units from which the user can choose from', () => {
        const {getByTestId} = render(UnitSwitcher, {mocks})

        expect(getByTestId('metric')).toBeInTheDocument()
        expect(getByTestId('imperial')).toBeInTheDocument()
    })

    it('triggers the event for updating the application state', async () => {
        const dummyLat = 42.5061
        const dummyLon = 27.4678
        const dummyCoords = new Coords(dummyLat, dummyLon)
        store.setCoords(dummyCoords)
        const {getByTestId} = render(UnitSwitcher, {mocks})
        const fahrenheit = getByTestId('imperial')
        await fireEvent.click(fahrenheit)
        expect(mockBubble).toHaveBeenCalledWith(
            'update-weather',
            {lang: 'en', lat: dummyLat, lon: dummyLon, q: '', units: 'imperial'}
            )
    })
});