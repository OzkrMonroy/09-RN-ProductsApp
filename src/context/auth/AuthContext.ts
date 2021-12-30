import { createContext } from 'react';
import { LoginData, User } from '../../interfaces/LoginInterface';

export type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: User | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  signUp: () => void;
  signIn: (obj: LoginData) => void;
  logout: () => void;
  removeError: () => void;
}

export const AuthContext = createContext({} as AuthContextProps)