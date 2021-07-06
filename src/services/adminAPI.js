import axiosClient from './axiosClient';

const adminAPI = {
    //Admin User
    getUserList: () => {
        const params = {
            maNhom: "GP08",
        }
        return axiosClient.get("/QuanLyNguoiDung/LayDanhSachNguoiDung", {params})
    },
    getUser: (values) => {
        const params = {
            maNhom:'GP08',
            tuKhoa:values,
        }
        return axiosClient.get("/QuanLyNguoiDung/TimKiemNguoiDung", {params})
    },
    addUser: (data) => {
        return axiosClient.post("/QuanLyNguoiDung/ThemNguoiDung", data)
    },
    updateUser: (data) => {
        const user = {...data, maNhom:'GP08'}
        return axiosClient.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", user)
    },
    deleteUser: (values) => {
        const params={
            taiKhoan: values,
        }
        return axiosClient.delete("/QuanLyNguoiDung/XoaNguoiDung",{params})
    },
    getTypeOfUser: ()=> {
        return axiosClient.get("/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung")
    }
    ,
    getListCourses: () => {
        const params = {
            maNhom: "GP08",
        }
        return axiosClient.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc", {params})
    }
}

export default adminAPI;