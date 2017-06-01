import { SET_CURRENT_USER } from '../actions/actionCreators';
import isObjEmpty from 'lodash/isEmpty';

const initialState = {
  isAuth: false,
  idintifier: {}
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case 'SET_CURRENT_USER':
      return {
        isAuth: !isObjEmpty(action.idintifier),
        idintifier: action.idintifier
      }
    default: return state;
  }
}
