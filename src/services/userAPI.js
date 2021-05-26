import axiosClient from "./axiosClient";

const userAPI = {
  getAccountInfo: (account) => {
    return axiosClient.post("/QuanLyNguoiDung/ThongTinTaiKhoan", account);
  },

  updateAccountInfo: (account) => {
    return axiosClient.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", account);
  },
};

export default userAPI;
