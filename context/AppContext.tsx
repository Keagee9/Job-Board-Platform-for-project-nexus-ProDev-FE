
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { lightTheme, darkTheme } from '../constants/colors';

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
  theme: any; // Consider using a more specific type
  toggleTheme: () => void;
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

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <AppContext.Provider value={{ appState, setAppState, theme, toggleTheme }}>
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
