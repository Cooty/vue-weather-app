import { render } from '@testing-library/vue'
import Wrapper from './Wrapper.vue'

describe('A component for centering content', () => {
    it('renders the text passed to the default slot', () => {
        const dummyContent = 'This is my wrapper'

        const { getByText } = render(Wrapper, {
            slots: {
                default: dummyContent
            }
        });

        expect(getByText(dummyContent)).toBeTruthy()
    })
})
