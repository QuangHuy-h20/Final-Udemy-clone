import axiosClient from './axiosClient';

const adminAPI = {
    getListUser: () => {
        const params = {
            maNhom: "GP08",
        }
        return axiosClient.get("/QuanLyNguoiDung/LayDanhSachNguoiDung", {params})
    },
    getListCourses: () => {
        const params = {
            maNhom: "GP08",
        }
        return axiosClient.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc", {params})
    }
}

export default adminAPI;