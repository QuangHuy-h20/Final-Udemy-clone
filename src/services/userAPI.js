import axiosClient from "./axiosClient";

const getUserAPI = {
  getAccountInfo: (values) => {
    return axiosClient.post("/QuanLyNguoiDung/ThongTinTaiKhoan", values);
  },
};

export default getUserAPI;
