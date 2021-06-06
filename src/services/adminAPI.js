import axiosClient from './axiosClient';

const adminAPI = {
    getListUser: () => {
        const params = {
            maNhom: "GP08",
        }
        return axiosClient.get("/QuanLyNguoiDung/LayDanhSachNguoiDung", {params})
    }
}

export default adminAPI;