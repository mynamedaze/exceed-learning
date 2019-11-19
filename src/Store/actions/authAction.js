import axios from "axios";
import {AUTH_SUCCESS, GET_PROFILE_INFO, LOGOUT} from "./actionTypes";

export function makeLogin(inp) {
  return async dispatch => {
    const accountInfo = {};
    for (let key in inp) {
      if (inp.hasOwnProperty(key)) {
        accountInfo[key] = inp[key].value;
      }
    }

    axios.post('http://localhost:8080/users/login', accountInfo)
      .then(response => {
        console.log(response);
        if (!response.data.success) {
          dispatch(logout());
        } else {
          dispatch(authSuccess(response.data.token));
          localStorage.setItem('authToken', response.data.token);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export function autoLogin() {
  return dispatch => {
    const token = localStorage.getItem('authToken');
    if(!token) {
      dispatch(logout());
    } else {
      dispatch(authSuccess(token));
    }
  }
}

export function authSuccess(token) {
  return {
    type: AUTH_SUCCESS,
    token
  }
}

export function logout() {
  localStorage.removeItem('authToken');
  return {
    type: LOGOUT
  }
}

export function getProfileInfo() {
  return async dispatch => {
    try {
      const response = await axios.get('http://localhost:8080/users', {headers: {somekey: localStorage.getItem('authToken')}});
      dispatch(fixProfileInfo(response.data));
    } catch (e) {
      console.log(e);
    }
  };
}

export function fixProfileInfo(profileInfo) {
  return {
    type: GET_PROFILE_INFO,
    profileInfo
  }
}