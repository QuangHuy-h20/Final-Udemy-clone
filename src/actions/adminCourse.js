import adminAPI from 'src/services/adminAPI';
import {
    GET_COURSE_LIST_REQUEST,
    GET_COURSE_LIST_FAILURE,
    GET_COURSE_LIST_SUCCESS,
} from '../constants/adminCourse';

export function getCourseList() {
    return async (dispatch) => {
        dispatch({type:GET_COURSE_LIST_REQUEST})
        try{
            const {data} = await adminAPI.getListCourses();
            dispatch({
                type:GET_COURSE_LIST_SUCCESS,
                payload:{data}
            })
        }catch(error){

            dispatch({
                type:GET_COURSE_LIST_FAILURE,
                payload:{ error:error.response.data }
            })
        }
    }
}