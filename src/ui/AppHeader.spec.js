/* eslint-disable vue/one-component-per-file */
import { render } from "@testing-library/vue";
import AppHeader from "./AppHeader";
import Vue from "vue";

jest.mock("../infrastructure/environment", () => {
    return {
        API_KEY: "1234abc",
        MODE: "prod",
    };
});

describe("A component for rendering the header of the app", () => {
    it("renders the content passed to both left and right slots", () => {
        const dummyContentRight =
            "I will appear in the right side of the header";
        const dummyContentLeft = "I will appear in the left side of the header";
        const RightComponent = Vue.component("RightComponent", {
            data() {
                return {
                    msg: dummyContentRight,
                };
            },
            template: "<strong>{{msg}}</strong>",
        });
        const LeftComponent = Vue.component("LeftComponent", {
            data() {
                return {
                    msg: dummyContentLeft,
                };
            },
            template: "<strong>{{msg}}</strong>",
        });

        const { getByText } = render(AppHeader, {
            slots: {
                right: RightComponent,
                left: LeftComponent,
            },
        });

        expect(getByText(dummyContentRight)).toBeVisible();
        expect(getByText(dummyContentLeft)).toBeVisible();
    });
});
