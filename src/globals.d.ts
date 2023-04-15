export {}

// REMINDER: includes window.function = function methods
declare global {
    interface Window {
        toggle: () => void;
    }
  }