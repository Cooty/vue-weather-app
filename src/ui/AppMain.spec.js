import {render} from '@testing-library/vue'
import AppMain from './AppMain'
import Vue from 'vue'

describe('A component for rendering the main content of the app', () => {
    it('renders the content passed to the default slot', () => {
        const dummyContent = 'I am some piece of content'
        const MyComponent = Vue.component('MyComponent', {
            data() {
                return {
                    msg: dummyContent
                }
            },
            template: '<strong>{{msg}}</strong>'
        })

        const { getByText } = render(AppMain, {
            slots: {
                default: MyComponent
            }
        })

        expect(getByText(dummyContent)).toBeVisible()
    })
})