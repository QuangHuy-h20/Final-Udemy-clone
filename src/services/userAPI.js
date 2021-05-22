import axiosClient from "./axiosClient";

const getUserAPI = {
  getAccountInfo: (account) => {
    // const {params} = {
    //   taiKhoan: account
    // }
    return axiosClient.post("/QuanLyNguoiDung/ThongTinTaiKhoan", account);
  },
};

export default getUserAPI;
