import axiosClient from "./axiosClient";

const courseDetailAPI = {
  getCourseDetail: (values) => {
    const params = {
      maKhoaHoc: values,
    };
    return axiosClient.get("/QuanLyKhoaHoc/LayThongTinKhoaHoc", { params });
  },
};

export default courseDetailAPI;
