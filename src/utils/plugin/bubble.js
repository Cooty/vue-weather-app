// Bubble a custom event from nested components
// @see.: https://stackoverflow.com/questions/41993508/vuejs-bubbling-custom-events

const bubble = (Vue) => {
    Vue.prototype.$bubble = function $bubble(eventName, ...args) {
        // Emit the event on all parent components
        let component = this;
        do {
            component.$emit(eventName, ...args);
            component = component.$parent;
        } while (component);
    };
}

export default bubble
