import {AUTH_SUCCESS, GET_PROFILE_INFO, LOGOUT} from "../actions/actionTypes";

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
    case GET_PROFILE_INFO:
      return {
        ...state,
        profileInfo: action.profileInfo
      };
    default:
      return state;
  }
}