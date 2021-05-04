import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "../constants/auth";

const userRegis = {
  taiKhoan: "",
  matKhau: "",
  hoTen: "",
  email: "h@123",
  soDT: "0123456789",
  maNhom: "GP01",
};

// localStorage.getItem("userRegis")
//   ? JSON.parse(localStorage.getItem("userRegis"))
//   : null;

const initialState = {
  userRegis,
  isLoading: false,
  error: null,
};

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, isLoading: true, error: null };
    case REGISTER_SUCCESS:
      return { ...state, isLoading: false, userRegis: action.payload.data };
    case REGISTER_FAILURE:
      return { ...state, isLoading: true, error: action.payload.error };

    default:
      return { ...state };
  }
}

export default registerReducer;
