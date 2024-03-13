import { create } from 'zustand'

function storeDirection(lang) {
  localStorage.setItem("direction", lang);
}

function getLang() {
  if (!!localStorage.getItem("direction")) {
    return localStorage.getItem("direction");
  } else {
    return "ltr";
  }
}

export const settingsStore = create((set) => ({
  direction: getLang(),
  responsiveFontSizes: true,

  setDirection: (dir) => {
    set(() => ({ direction: dir }));
    storeDirection(dir);
  },
}));
