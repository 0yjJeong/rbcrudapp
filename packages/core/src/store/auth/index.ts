import create from 'zustand';

import { User } from '../../types';

export type InitialState = {
  setUser(payload: User): void;
};

const initialState: InitialState = {
  setUser: null,
};

export const useAuthStore = create<InitialState>((set) => ({
  ...initialState,
  setUser(user: User) {
    set((state) => ({ ...state, user }));
  },
}));
