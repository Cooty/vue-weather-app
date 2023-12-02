import { fireEvent, render } from "@testing-library/vue";
import QueryForm from "./QueryForm.vue";
import getRandomCoordinates from "../../infrastructure/get-random-coordinates";
import store from "../../infrastructure/store";

jest.mock("../../infrastructure/environment", () => {
    return {
        API_KEY: "1234abc",
        MODE: "prod",
    };
});

jest.mock("../../infrastructure/get-random-coordinates");

const dummyTranslations = {
    "messages.cityPlaceholder": "Type your city",
    "messages.submit": "Check the weather!",
};
const mocks = {
    $t: (key) => dummyTranslations[key],
    $n: (n) => n,
    // $i18n: {
    //     locale: 'en'
    // },
};

describe("A component for querying weather data", () => {
    it("calls the API with random coordinates and the form is in the default state", () => {
        const lat = 47.9291607;
        const lon = 20.3213702;
        getRandomCoordinates.mockImplementation(() => {
            return { lat, lon };
        });

        const { getByPlaceholderText, getByLabelText } = render(QueryForm, {
            mocks,
        });

        expect(getRandomCoordinates).toHaveBeenCalledTimes(1);
        expect(getByLabelText("Check the weather!")).toBeDisabled();
        expect(getByPlaceholderText("Type your city")).toBeVisible();
    });

    it("calls the API with a given city when submitting the form", async () => {
        const { getByPlaceholderText, getByLabelText } = render(QueryForm, {
            mocks,
        });
        const city = "Budapest";

        store.isLoading = false;

        const cityInput = getByPlaceholderText("Type your city");
        await fireEvent.update(cityInput, city);
        const button = getByLabelText("Check the weather!");
        expect(button).toBeEnabled();
    });
});
