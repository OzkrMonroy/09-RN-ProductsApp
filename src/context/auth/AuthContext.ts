import { createContext } from 'react';
import { LoginData, User } from '../../interfaces/LoginInterface';
import { RegisterData } from '../../interfaces/RegisterInterface';

export type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: User | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  signUp: (obj: RegisterData) => void;
  signIn: (obj: LoginData) => void;
  logout: () => void;
  removeError: () => void;
}

export const AuthContext = createContext({} as AuthContextProps)