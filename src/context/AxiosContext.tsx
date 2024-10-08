import React, { createContext, useContext, ReactNode } from 'react';
import axiosInstance from "../middleware/interceptor/axiosInstance";

// Create a context for Axios
const AxiosContext = createContext(axiosInstance);

export const AxiosProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AxiosContext.Provider value={axiosInstance}>
      {children}
    </AxiosContext.Provider>
  );
};

export const useAxios = () => {
  const context = useContext(AxiosContext);
  if (context === undefined) {
    throw new Error('useAxios must be used within an AxiosProvider');
  }
  return context;
};
