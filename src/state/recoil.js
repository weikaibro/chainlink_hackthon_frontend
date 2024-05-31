import { atom } from 'recoil';

export const darkModeState = atom({
  key: 'darkModeState',
  default: true,
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