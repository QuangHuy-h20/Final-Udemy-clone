import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "../constants/auth";

const userRegister = {
  taiKhoan: "",
  matKhau: "",
  hoTen: "",
  soDT: "0144552894",
  maNhom: "GP01",
  email: "",
};

const initialState = {
  userRegister,
  isLoading: false,
  error: null,
};

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, isLoading: true, error: null };
    case REGISTER_SUCCESS: {
      return { ...state, isLoading: false, userRegister: action.payload.data };
    }
    case REGISTER_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }

    default:
      return state;
  }
}

export default registerReducer;
