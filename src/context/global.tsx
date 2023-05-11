import React, { createContext, ReactNode } from 'react';

export const GlobalContext = createContext<null | undefined | any>(null);

const { Provider } = GlobalContext;

type GlobalContextProviderProps = {
  children: ReactNode;
};

export const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => (
  <Provider value={null}>{children}</Provider>
);
