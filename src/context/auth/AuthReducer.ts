import { User } from '../../interfaces/LoginInterface';

export interface AuthInitialState {
  errorMessage: string;
  token: string | null;
  user: User | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
}

type AuthAction =
  | { type: 'signUp'; payload: { token: string; user: User } }
  | { type: 'addError'; payload: string }
  | { type: 'removeError' }
  | { type: 'notAuthenticated' }
  | { type: 'logout' };

export const authReducer = (
  state: AuthInitialState,
  action: AuthAction,
): AuthInitialState => {
  switch (action.type) {
    case 'addError':
      return {
        ...state,
        errorMessage: action.payload,
        user: null,
        status: 'not-authenticated',
        token: null,
      };
    case 'removeError':
      return {
        ...state,
        errorMessage: ''
      }
    case 'signUp':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        status: 'authenticated',
        errorMessage: ''
      }
    case 'logout':
    case 'notAuthenticated':
      return {
        ...state,
        user: null,
        token: null,
        status: 'not-authenticated'
      }
    default:
      return state;
  }
};
