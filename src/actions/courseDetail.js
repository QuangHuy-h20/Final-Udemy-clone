import {
  GET_COURSE_DETAIL_REQUEST,
  GET_COURSE_DETAIL_SUCCESS,
  GET_COURSE_DETAIL_FAILURE,
} from "../constants/courseDetail";

import courseDetailAPI from "../services/courseDetailAPI";

export function getCourseDetail(values) {
  return async (dispatch) => {
    dispatch({ type: GET_COURSE_DETAIL_REQUEST });
    try {
      const { data } = await courseDetailAPI.getCourseDetail(values);
      dispatch({ type: GET_COURSE_DETAIL_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: GET_COURSE_DETAIL_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
