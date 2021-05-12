import axiosClient from "./axiosClient";

const coursesAPI = {
  getCourses: () => {
    return axiosClient.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc");
  },

  getCoursesByCategory: (category) => {
    const params = {
      maDanhMuc: category,
      maNhom: "GP01",
    };
    return axiosClient.get("/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc", {
      params,
    });
  },
  getCoursesBySearchName: (name) => {
    const params = {
      maNhom: "GP01",
      tenKhoaHoc: name,
    };
    return axiosClient.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc", {
      params,
    });
  },
};

export default coursesAPI;
