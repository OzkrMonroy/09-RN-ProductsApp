import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { AuthInitialState, authReducer } from './AuthReducer'

export const AuthState = ({ children }: any) => {
  const initialState: AuthInitialState = {
    status: 'checking',
    user: null,
    token: null,
    errorMessage: ''
  }

  const [state, dispatch] = useReducer(authReducer, initialState)
  
  const signUp = () => {}
  const signIn = () => {}
  const logout = () => {}
  const removeError = () => {}

  return (
    <AuthContext.Provider value={{
      ...state,
      signUp,
      signIn,
      logout,
      removeError
    }}>
      {children}
    </AuthContext.Provider>
  )
}
