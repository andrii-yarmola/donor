import axios from 'axios';

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
      console.log(res);
    })
  }
}