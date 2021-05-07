import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "../constants/auth";

const userRegister = {
  taiKhoan: "",
  matKhau: "",
  hoTen: "",
  soDT: "0123456789",
  maNhom: "GP01",
  email: "h@123",
};

const initialState = {
  userRegister,
  isLoading: false,
  error: null,
  registered: false,
};

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, isLoading: true, error: null, registered: null };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userRegis: action.payload.data,
        registered: true,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isLoading: true,
        error: action.payload.error,
        registered: false,
      };

    default:
      return state;
  }
}

export default registerReducer;
