import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "../constants/auth";
import authAPI from "../services/authAPI";

export function login(values) {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const { data } = await authAPI.login(values);
      //save user info into localStorage to keep login status when user close website
      localStorage.setItem("userInfo", JSON.stringify(data));
      dispatch({ type: LOGIN_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}

export function logout() {
  return (dispatch) => {
    dispatch({ type: LOGOUT });
  };
}

export function registerAccount(values) {
  return async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
      const { data } = await authAPI.registerAccount(values);
      // localStorage.setItem("userRegis", JSON.stringify(data));
      dispatch({ type: REGISTER_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: REGISTER_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
