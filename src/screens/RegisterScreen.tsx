import React, { useContext, useEffect } from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { Alert, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { WhiteLogo } from '../components/WhiteLogo';
import { loginStyles } from '../theme/LoginTheme';
import { useForm } from '../hooks/useForm';
import { AuthContext } from '../context/auth/AuthContext';

interface Props extends StackScreenProps<any, any> { }

export const RegisterScreen = ({ navigation }: Props) => {
  const { email, password, name, onChange } = useForm({ email: '', password: '', name: '' })
  const { errorMessage, signUp, removeError } = useContext(AuthContext)

  useEffect(() => {
    if(errorMessage.length === 0) return
    Alert.alert('Error', errorMessage, [{ text: 'Ok', onPress:  removeError}])
  }, [errorMessage])

  const onRegister = () => {
    console.log(email, password, name);
    Keyboard.dismiss()
    signUp({ correo: email, password, nombre: name })
  }

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: '#5856D6' }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={loginStyles.formContainer}>
          <WhiteLogo />
          <Text style={loginStyles.title}>Register</Text>

          <Text style={loginStyles.label}>Name</Text>
          <TextInput
            placeholder="Enter your name"
            placeholderTextColor={'rgba(255,255,255, .4)'}
            underlineColorAndroid={'white'}
            style={[loginStyles.inputField, (Platform.OS === 'ios') && loginStyles.inputFieldIOS]}
            selectionColor={'white'}
            autoCapitalize='words'
            autoCorrect={false}
            onChangeText={(value) => onChange(value, 'name')}
            value={name}
            onSubmitEditing={onRegister}
          />
          <Text style={loginStyles.label}>Email</Text>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor={'rgba(255,255,255, .4)'}
            keyboardType='email-address'
            underlineColorAndroid={'white'}
            style={[loginStyles.inputField, (Platform.OS === 'ios') && loginStyles.inputFieldIOS]}
            selectionColor={'white'}
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={(value) => onChange(value, 'email')}
            value={email}
            onSubmitEditing={onRegister}
          />
          <Text style={loginStyles.label}>Password</Text>
          <TextInput
            placeholder="*********"
            placeholderTextColor={'rgba(255,255,255, .4)'}
            secureTextEntry
            underlineColorAndroid={'white'}
            style={[loginStyles.inputField, (Platform.OS === 'ios') && loginStyles.inputFieldIOS]}
            selectionColor={'white'}
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={(value) => onChange(value, 'password')}
            value={password}
            onSubmitEditing={onRegister}
          />
          <View style={loginStyles.buttonContainer}>
            <TouchableOpacity activeOpacity={.8} style={loginStyles.button} onPress={onRegister}>
              <Text style={loginStyles.buttonText}>Create account</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity activeOpacity={.8} onPress={() => navigation.replace('LoginScreen')} style={loginStyles.returnButton}>
            <Text style={loginStyles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
