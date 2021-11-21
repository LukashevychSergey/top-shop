const listeners = {};

export const observer = {
  addListener(type, listener) {
    listeners[type] = (listeners[type] || []).concat(listener);
  },
  emit(type) {
    Object.keys(listeners[type])?.forEach((listener) => {
      listener();
    });
  },
  removeListener(type) {
    listeners[type] = delete listeners[type];
  },
};
