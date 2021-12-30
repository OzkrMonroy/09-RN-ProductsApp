import { createContext } from 'react';
import { User } from '../../interfaces/LoginInterface';

export type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: User | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  signUp: () => void;
  signIn: () => void;
  logout: () => void;
  removeError: () => void;
}

export const AuthContext = createContext({} as AuthContextProps)