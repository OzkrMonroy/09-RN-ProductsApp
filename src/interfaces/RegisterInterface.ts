import { LoginData } from './LoginInterface';

export interface RegisterData extends LoginData{
  nombre: string;
}