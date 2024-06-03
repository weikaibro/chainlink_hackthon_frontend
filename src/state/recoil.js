import { atom } from 'recoil';

export const darkModeState = atom({
  key: 'darkModeState',
  default: false,
});

export const walletAccount = atom({
  key: 'walletAccount',
  default: {},
});

export const loggedIn = atom({
  key: 'loggedIn',
  default: false,
});

export const gameAdd = atom({
  key: 'gameAdd',
  default: "",
});

export const coinsState = atom({
  key: 'coinsState',
  default: false,
});
