import React from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Background } from '../components/Background';
import { WhiteLogo } from '../components/WhiteLogo';
import { loginStyles } from '../theme/LoginTheme';

export const LoginScreen = () => {
  return (
    <>
      <Background />
      <View>
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
        />
        <Text style={loginStyles.label}>Password</Text>
        <TextInput
          placeholder="*********"
          placeholderTextColor={'rgba(255,255,255, .4)'}
          underlineColorAndroid={'white'}
          style={[loginStyles.inputField, (Platform.OS === 'ios') && loginStyles.inputFieldIOS]}
          selectionColor={'white'}
          autoCapitalize='none'
          autoCorrect={false}
        />
        <View style={loginStyles.buttonContainer}>
          <TouchableOpacity activeOpacity={.9} style={loginStyles.button}>
            <Text style={loginStyles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={loginStyles.newUserContainer}>
          <TouchableOpacity activeOpacity={.9}>
            <Text style={loginStyles.buttonText}>Create new user</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
