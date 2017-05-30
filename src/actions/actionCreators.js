import axios from 'axios';

// sync actions

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  user 
});

export function login(data) {
  return dispatch => {
    return axios.post('/api/auth', data).then(res => {
      console.log(res);
    })
  }
}