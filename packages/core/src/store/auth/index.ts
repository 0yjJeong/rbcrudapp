import create from 'zustand';

import { LoginForm, User } from '../../types';

export type InitialState = {
  isLogged: boolean;
  login(value: LoginForm): Promise<void>;
  logout(): Promise<void>;

  user: User | null;
  setUser(payload: User): void;
};

const initialState: InitialState = {
  isLogged: false,
  login: null,
  logout: null,

  user: null,
  setUser: null,
};

export const useAuthStore = create<InitialState>((set) => ({
  ...initialState,
  async login() {
    set((state) => ({ ...state, isLogged: true }));
  },
  async logout() {
    set((state) => ({ ...state, isLogged: false }));
  },
  setUser(user: User) {
    set((state) => ({ ...state, user }));
  },
}));
