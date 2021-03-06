import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 30,
    marginTop: 20,
    fontWeight: 'bold'
  },
  label: {
    marginTop: 25,
    color: 'white',
    fontWeight: 'bold'
  },
  inputField: {
    color: 'white',
    fontSize: 20,
  },
  inputFieldIOS: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    paddingBottom:4
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 50
  },
  button: {
    borderWidth: 2,
    borderColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 50
  },
  buttonText: {
    fontSize: 18,
    color: 'white'
  },
  newUserContainer: {
    marginTop: 20,
    alignItems: 'flex-end'
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    height: 600,
    marginBottom: 50
  },
  returnButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50
  }
})