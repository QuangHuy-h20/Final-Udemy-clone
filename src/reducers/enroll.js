import {
  ENROLL_REQUEST,
  ENROLL_SUCCESS,
  ENROLL_FAILURE,
  CANCEL_ENROLL_REQUEST,
  CANCEL_ENROLL_SUCCESS,
  CANCEL_ENROLL_FAILURE,
} from "src/constants/enroll";

const initialState = {
  enroll: "",
  cancel: "",
  isEnroll: false,
  error: null,
};

function enrollReducer(state = initialState, action) {
  switch (action.type) {
    case ENROLL_REQUEST: {
      return { ...state, isEnroll: false, error: null };
    }
    case ENROLL_SUCCESS: {
      return { ...state, isEnroll: true, enroll: action.payload.data };
    }
    case ENROLL_FAILURE: {
      return { ...state, isEnroll: false, error: action.payload.error };
    }
    case CANCEL_ENROLL_REQUEST: {
      return { ...state, error: null };
    }
    case CANCEL_ENROLL_SUCCESS: {
      return { ...state, isEnroll: false, cancel: action.payload.data };
    }
    case CANCEL_ENROLL_FAILURE: {
      return { ...state, isEnroll: false, error: action.payload.error };
    }
    default:
      return state;
  }
}

export default enrollReducer;
