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
  removeListener(type, removedListener) {
    listeners[type] = listeners[type]?.filter((listener) => {
      return listener !== removedListener;
    });
  },
};
