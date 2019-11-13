import {AUTH_SUCCESS, LOGOUT} from "../actions/actionTypes";

const initialState = {};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        authValid: true
      };
    case LOGOUT:
      return {
        ...state,
        authValid: false
      };
    default:
      return state;
  }
}