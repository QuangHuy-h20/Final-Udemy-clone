import {
  GET_COURSE_DETAIL_REQUEST,
  GET_COURSE_DETAIL_SUCCESS,
  GET_COURSE_DETAIL_FAILURE,
} from "../constants/courseDetail";

const initialState = {
  courseDetail: [],
  isLoading: false,
  error: null,
};

export default function courseDetailReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COURSE_DETAIL_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case GET_COURSE_DETAIL_SUCCESS: {
      return { ...state, isLoading: false, courseDetail: action.payload.data };
    }
    case GET_COURSE_DETAIL_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}
