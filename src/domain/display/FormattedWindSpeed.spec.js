import { render } from '@testing-library/vue'
import FormattedWindSpeed from './FormattedWindSpeed'
import store from '../../infrastructure/store'

jest.mock('../../infrastructure/environment', () => {
    return {
        API_KEY: '1234abc',
        MODE: 'prod'
    }
})

const mocks = {
    $n: () => '9.8',
    $i18n: {
        locale: 'en'
    }
}

describe('A component for displaying formatted wind speed', () => {
    it('shows the wind speed with units and rounding', () => {
        const {getByText} = render(FormattedWindSpeed, {
            props: {
                windSpeed: 9.85,
                windDeg: 58
            },
            mocks
        })

        getByText('9.8m/s')
    })

    it('it sets the rotation on the arrow icon based on the degree of the wind', () => {
        const {getByRole} = render(FormattedWindSpeed, {
            props: {
                windSpeed: 9.85,
                windDeg: 58
            },
            mocks
        })
        const icon = getByRole('img')
        expect(icon).toHaveStyle({
            transform: 'rotate(58deg)'
        })
    })

    it('adopts the formatting to the language and the units', () => {
        mocks.$i18n = 'de'
        mocks.$n = () => '9,8'
        store.setUnits('imperial')

        const {getByText} = render(FormattedWindSpeed, {
            props: {
                windSpeed: 9.85,
                windDeg: 58
            },
            mocks
        })

        getByText('9,8mph')
    })
})