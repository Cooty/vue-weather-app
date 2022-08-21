const isDarkModePreferred = () =>
    window.matchMedia("(prefers-color-scheme:dark)").matches;

export default isDarkModePreferred;
