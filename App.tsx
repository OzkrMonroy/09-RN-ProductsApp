import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Navigator } from './src/navigation/Navigator';
import { AuthState } from './src/context/auth/AuthState';

const AppState = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <AuthState>
      {children}
    </AuthState>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  )
}

export default App