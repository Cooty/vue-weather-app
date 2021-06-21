import { render } from '@testing-library/vue'
import FormattedTemperature from './FormattedTemperature.vue'

describe('A component for displaying formatted temperatures', () => {
    it('renders the number passed in without decimals and appends the unit', () => {
        const tempInput = 20.06

        const { getByText } = render(FormattedTemperature, {
            props: {
                temp: tempInput
            }
        });

        expect(getByText('20°C')).toBeVisible()
    })

    it('should render the text in a way that it never wraps into multiple lines', () => {
        const tempInput = 20.06

        const { getByText } = render(FormattedTemperature, {
            props: {
                temp: tempInput
            }
        });

        expect(getByText('20°C')).toHaveClass('text-nowrap')
    })
})
