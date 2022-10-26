import create from 'zustand';

import { Resource } from '../../types';

export type InitialState = {
  register(payload: Record<string, Resource>): void;
};

export const intialState: InitialState = {
  register: null,
};

export const useResourceStore = create<InitialState>((set) => ({
  ...intialState,
}));
