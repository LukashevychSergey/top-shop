const listeners = {};

export const observer = {
  addListener(type, listener) {
    listeners[type] = (listeners[type] || []).concat(listener);
  },
  emit(type) {
    listeners[type]?.forEach((listener) => {
      listener();
    });
  },
};
