import { createContext } from 'react';

interface AuthContextData {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
} as AuthContextData);
