import { render } from '@testing-library/vue'
import TextRow from './TextRow.vue'

describe('A component for displaying a block of text', () => {
    it('renders the text passed to the default slot', () => {
        const dummyContent = 'This is my text'

        const { getByText } = render(TextRow, {
            slots: {
                default: dummyContent
            }
        });

        expect(getByText(dummyContent)).toBeVisible()
    })

    it('renders the element bold when that option is set', () => {
        const dummyContent = 'This is my text'

        const { getByText } = render(TextRow, {
            slots: {
                default: dummyContent
            },
            props: {
                bold: true
            }
        });

        expect(getByText(dummyContent)).toHaveStyle({display: 'block'});
        expect(getByText(dummyContent)).toHaveClass('font-weight-bold');
    })

    it('renders the element in lighter color when that option is set', () => {
        const dummyContent = 'This is my text'

        const { getByText } = render(TextRow, {
            slots: {
                default: dummyContent
            },
            props: {
                muted: true
            }
        });

        expect(getByText(dummyContent)).toHaveClass('text-muted');
    })

    it('renders the element in without a bottom margin if that option is set', () => {
        const dummyContent = 'This is my text'

        const { getByText } = render(TextRow, {
            slots: {
                default: dummyContent
            },
            props: {
                noBottomMargin: true
            }
        });

        expect(getByText(dummyContent)).toHaveStyle({marginBottom: '0 !important'});
    })
})
