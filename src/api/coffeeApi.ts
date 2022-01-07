import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

// const baseURL = 'http://192.168.1.9:8080/api'
const baseURL = 'https://react-native-coffee.herokuapp.com/api'

const coffeeApi = axios.create({ baseURL })

coffeeApi.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token')
    if(token){
      config.headers!['x-token'] = token
    }

    return config
  }
)

export default coffeeApi