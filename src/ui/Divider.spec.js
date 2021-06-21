import { render } from '@testing-library/vue'
import Divider from './Divider.vue'

describe('A component for dividing rows', () => {
    it('renders a block level element', () => {
        const { container } = render(Divider);

        const el = container.firstElementChild
        expect(el).toBeVisible()
        expect(el).toHaveStyle({display: 'block'})
    })
})
