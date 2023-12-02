import { render } from "@testing-library/vue";
import FormattedVisibility from "./FormattedVisibility";
import store from "../../infrastructure/store";

jest.mock("../../infrastructure/environment", () => {
    return {
        API_KEY: "1234abc",
        MODE: "prod",
    };
});

const mocks = {
    $n: () => "10.6",
    $i18n: {
        locale: "en",
    },
};

describe("A component for displaying formatted visibility", () => {
    it("renders the visibility in the default unit as a rounded number", () => {
        const { getByText } = render(FormattedVisibility, {
            props: {
                visibility: 10602,
            },
            mocks,
        });

        getByText("10.6km");
    });

    it("adopts the output based on language end unit settings", () => {
        mocks.$n = () => "6,2";
        mocks.$i18n = "hu";

        store.units = "imperial";
        const { getByText } = render(FormattedVisibility, {
            props: {
                visibility: 10000,
            },
            mocks,
        });

        getByText("6,2mi");
    });
});
