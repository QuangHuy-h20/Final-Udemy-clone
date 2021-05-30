import {
  ENROLL_REQUEST,
  ENROLL_SUCCESS,
  ENROLL_FAILURE,
  CANCEL_ENROLL_REQUEST,
  CANCEL_ENROLL_SUCCESS,
  CANCEL_ENROLL_FAILURE,
} from "src/constants/enroll";

// const userInfo = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : null;
// const enroll = [
//   {
//     userName: userInfo.taiKhoan,
//     params: "",
//   },
// ];
const initialState = {
  enroll:{},
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
      return { ...state, isEnroll: true, error: null };
    }
    case CANCEL_ENROLL_SUCCESS: {
      return { ...state, isEnroll: false, course: action.payload.data };
    }
    case CANCEL_ENROLL_FAILURE: {
      return { ...state, isEnroll: true, error: action.payload.error };
    }
    default:
      return state;
  }
}

export default enrollReducer;
