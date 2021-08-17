import {render} from '@testing-library/vue'
import UnitSwitcher from './UnitSwitcher.vue'

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

const mockBubble = jest.fn(() => console.log('fooooo')).mockName('bubbles')

const mocks = {
    $t: (key) => dummyTranslations[key],
    $i18n: {
        locale: 'en'
    },
    $bubble: mockBubble
}

describe('Renders a switch to toggle units', () => {
    it('displays both type of units from which the user can choose from', () => {
        const {getByText} = render(UnitSwitcher, {mocks})

        expect(getByText(`${metricEn}: °C`)).toBeVisible()
        expect(getByText(`${imperialEn}: °F`)).toBeVisible()
    })
});