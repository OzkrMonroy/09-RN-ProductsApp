import React, { useEffect, useReducer } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import coffeeApi from '../../api/coffeeApi'
import { LoginData, LoginResponse } from '../../interfaces/LoginInterface'
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

  useEffect(() => {
    checkToken()
  }, [])

  const checkToken = async () => {
    try {
      const tokenStorage = await AsyncStorage.getItem('token')
      if(!tokenStorage) return dispatch({ type: 'notAuthenticated' })

      const resp = await coffeeApi.get<LoginResponse>('/auth')

      if(resp.status !== 200){
        dispatch({ type: 'notAuthenticated' })
        return
      }

      const { usuario, token } = resp.data
      dispatch({ type: 'signUp', payload: { token, user: usuario } })
      await AsyncStorage.setItem('token', token)

    } catch (error) {
      
    }
  }

  const signIn = async ({ correo, password }: LoginData) => {
    try {
      const resp = await coffeeApi.post<LoginResponse>('/auth/login', { correo, password })
      const { token, usuario } = resp.data
      dispatch({ type: 'signUp', payload: { token, user: usuario } })
      await AsyncStorage.setItem('token', token)

    } catch (error: any) {
      console.log(error.response.data.msg);
      dispatch({ 
        type: 'addError', 
        payload: error.response.data.msg || 'Incorrect info'
      })
    }
  }
  const signUp = () => { }
  const logout = () => { }
  const removeError = () => {
    dispatch({type: 'removeError'})
  }

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
