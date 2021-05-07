import axiosClient from "./axiosClient";

const authAPI = {
  login: (values) => {
    return axiosClient.post("/QuanLyNguoiDung/DangNhap", values);
  },
  registerAccount: (values) => {
    return axiosClient.post("/QuanLyNguoiDung/DangKy", values);
  },
  
};

export default authAPI;
