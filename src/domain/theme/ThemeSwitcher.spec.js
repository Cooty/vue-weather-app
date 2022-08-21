import { render, fireEvent } from "@testing-library/vue";
import ThemeSwitcher from "./ThemeSwitcher.vue";
import store from "../../infrastructure/store";

jest.mock("../../infrastructure/environment", () => {
    return {
        API_KEY: "1234abc",
        MODE: "dev",
    };
});

const mockBubble = jest.fn(() => console.log("fooooo")).mockName("bubbles");

const switchThemeEn = "switch theme";

const dummyTranslations = {
    "messages.switchTheme": switchThemeEn,
};

const mocks = {
    $t: (key) => dummyTranslations[key],
    $n: (n) => n,
    // $i18n: {
    //     locale: 'en'
    // },
    $bubble: mockBubble,
};

describe("A component for changing between light and dark theme", () => {
    it("renders a switch where the value is off by default", () => {
        const { getByLabelText } = render(ThemeSwitcher, { mocks });
        const checkbox = getByLabelText(switchThemeEn);
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();
    });

    it("changes the theme to dark once it's checked", async () => {
        const { getByLabelText } = render(ThemeSwitcher, { mocks });
        const checkbox = getByLabelText(switchThemeEn);
        expect(store.state.theme).toEqual("light");
        await fireEvent.click(checkbox);
        expect(store.state.theme).toEqual("dark");
    });
});
