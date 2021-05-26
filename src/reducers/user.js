import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  GET_COURSES_ENROLL_REQUEST,
  GET_COURSES_ENROLL_SUCCESS,
  GET_COURSES_ENROLL_FAILURE
} from "../constants/user";

const initialState = {
  account:"",
  isLoading: false,
  error: null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case GET_USER_SUCCESS: {
      return { ...state, account: action.payload.data, isLoading: false };
    }
    case GET_USER_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
 

    default:
      return state;
  }
}

export default userReducer;
