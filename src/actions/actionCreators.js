import axios from 'axios';
import { AsyncStorage } from 'react-native';

import setAuthToken from '../utils/setAuthToken';

// API  URL
const baseURL = 'http://192.168.15.68:1337';


// sync actions

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const setCurrentUser = (idintifier) => ({
  type: SET_CURRENT_USER,
  idintifier 
});

export function login(data) {
  return dispatch => {
    return axios.post(`${baseURL}/auth`, data).then(res => {
      const token = res.data.token;
      const idintifier = res.data.idintifier;
      if (token) {       
        AsyncStorage.setItem('jwtToken', token);
        setAuthToken(token);      
      }
      if (idintifier) {
        dispatch(setCurrentUser(idintifier));
      }
    })
  }
}

export function userSignupRequest(data) {
  return dispatch => {
    return axios.post(`${baseURL}/user`, data);  
  }
}