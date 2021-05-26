import axiosClient from "./axiosClient";

const coursesAPI = {

  // const api = '/QuanLyKhoaHoc/'
  
  getCourses: () => {
    const params = {
      maNhom: "GP08",
    };
    return axiosClient.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc", {params});
  },

  getCoursesByCategory: (category) => {
    const params = {
      maDanhMuc: category,
      maNhom: "GP08",
    };
    return axiosClient.get("/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc", {
      params,
    });
  },

  getCoursesBySearchName: (name) => {
    const params = {
      maNhom: "GP08",
      tenKhoaHoc: name,
    };
    return axiosClient.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc", {
      params,
    });
  },
};

export default coursesAPI;
