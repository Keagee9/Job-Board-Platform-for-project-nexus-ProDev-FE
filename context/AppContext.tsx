
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AppState {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  professionalTitle: string[];
  about: string;
  skills: string[];
  portfolio: string;
}

interface AppContextType {
  appState: AppState;
  setAppState: React.Dispatch<React.SetStateAction<AppState>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [appState, setAppState] = useState<AppState>({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    professionalTitle: [],
    about: '',
    skills: [],
    portfolio: '',
  });

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
