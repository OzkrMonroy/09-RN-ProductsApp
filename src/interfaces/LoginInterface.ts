// Generated by https://quicktype.io

export interface LoginResponse {
  usuario: User;
  token:   string;
}

export interface User {
  rol:    string;
  estado: boolean;
  google: boolean;
  nombre: string;
  correo: string;
  uid:    string;
  img?:   string;
}