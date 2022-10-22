import create from 'zustand';

import { LoginForm } from '../../types';

type InitialState = {
  isLogged: boolean;
  login(value: LoginForm): void;
  logout(): void;
};

const initialState = {
  isLogged: false,
  login: null,
  logout: null,
};

export const useAuthStore = create<InitialState>((set) => ({
  ...initialState,
  login() {
    set((state) => ({ ...state, isLogged: true }));
  },
  logout() {
    set((state) => ({ ...state, isLogged: false }));
  },
}));
