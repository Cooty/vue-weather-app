// Bubble a custom event from nested components
// @see.: https://stackoverflow.com/questions/41993508/vuejs-bubbling-custom-events

// const bubble = (Vue) => {
//     Vue.prototype.$bubble = function $bubble(eventName, ...args) {
//         // Emit the event on all parent components
//         let component = this;
//         do {
//             component.$emit(eventName, ...args);
//             component = component.$parent;
//         } while (component);
//     };
// };

// export default bubble;

// try this https://gist.github.com/loilo/597fa84f4d7e6b7552373f2df9517b45

const bubble = {
    bind: (el, binding, vnode) => {
        Object.keys(binding.modifiers).forEach((event) => {
            // Bubble events of Vue components
            if (vnode.componentInstance) {
                vnode.componentInstance.$on(event, (...args) => {
                    vnode.context.$emit(event, ...args);
                });

                // Bubble events of native DOM elements
            } else {
                el.addEventListener(event, (payload) => {
                    vnode.context.$emit(event, payload);
                });
            }
        });
    },
};

export default bubble;
