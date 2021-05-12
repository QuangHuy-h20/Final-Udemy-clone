import axiosClient from "./axiosClient";

const courseDetailAPI = {
  getCourseDetail: (courseId) => {
    const params = {
      maKhoaHoc: courseId,
    };
    return axiosClient.get("/QuanLyKhoaHoc/LayThongTinKhoaHoc", { params });
  },
};

export default courseDetailAPI;
