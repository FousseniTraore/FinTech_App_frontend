import React, { createContext, useContext } from 'react';

const AppContext = createContext();

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppContext;