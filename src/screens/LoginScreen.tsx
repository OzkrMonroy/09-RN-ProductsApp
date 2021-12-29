import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { KeyboardAvoidingView, Platform, Text, TouchableOpacity, View, TextInput, Keyboard } from 'react-native';
import { Background } from '../components/Background';
import { WhiteLogo } from '../components/WhiteLogo';
import { useForm } from '../hooks/useForm';
import { loginStyles } from '../theme/LoginTheme';

interface Props extends StackScreenProps<any,any> {}

export const LoginScreen = ({ navigation }: Props) => {
  const { email, password, onChange } = useForm({ email: '', password: '' })

  const onLogin = () => {
    console.log(email, password);
    Keyboard.dismiss()
  }
  return (
    <>
      <Background />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={loginStyles.formContainer}>
          <WhiteLogo />
          <Text style={loginStyles.title}>Login</Text>
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
            onSubmitEditing={onLogin}
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
            onSubmitEditing={onLogin}
          />
          <View style={loginStyles.buttonContainer}>
            <TouchableOpacity activeOpacity={.8} style={loginStyles.button} onPress={onLogin}>
              <Text style={loginStyles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={loginStyles.newUserContainer}>
            <TouchableOpacity activeOpacity={.9} onPress={() => navigation.replace('RegisterScreen')}>
              <Text style={loginStyles.buttonText}>Create new user</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
