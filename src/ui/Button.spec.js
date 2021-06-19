import { render } from '@testing-library/vue'
import UIButton from './Button.vue'

describe('A button component', () => {
    it('renders the text passed to the default slot', () => {
        const dummyContent = 'This is my button'

        const { getByText } = render(UIButton, {
            slots: {
                default: dummyContent
            }
        });

        expect(getByText(dummyContent)).toBeTruthy()
    })
})
