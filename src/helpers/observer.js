const listeners = [];

export const observer = () => {
  return {
    addListener(listener) {
      listeners.push(listener);
    },
  };
};
