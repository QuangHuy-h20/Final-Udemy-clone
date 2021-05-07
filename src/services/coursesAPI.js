import axiosClient from "./axiosClient";

const coursesAPI = {
  getCourses: () => {
    return axiosClient.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc");
  },

  getCategory: (category) => {
    const params = {
      maDanhMuc: category,
    };
    return axiosClient.get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc", { params });
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
};

export default coursesAPI;
