import axios from 'axios';
import { AsyncStorage } from 'react-native';

import setAuthToken from '../utils/setAuthToken';

// API  URL
const baseURL = 'http://192.168.15.68:1337';


// sync actions

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  user 
});

export function login(data) {
  return dispatch => {
    return axios.post(`${baseURL}/user`, data).then(res => {
      const token = res.data.token;
      if (token) {
        
        AsyncStorage.setItem('jwtToken', token);
        setAuthToken(token);
        
        // dispatch(setCurrentUser(jwt.decode(token)));

        
      }
    })
  }
}