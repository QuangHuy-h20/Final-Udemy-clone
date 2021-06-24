import{
    GET_COURSE_LIST_REQUEST,
    GET_COURSE_LIST_SUCCESS,
    GET_COURSE_LIST_FAILURE,
} from '../constants/adminCourse'


const initialState = {
    cousrUpdate:null,
    courseList: [],
    isLoading: false,
    error: null,
};


function adminCourseReducer(state = initialState,action){
    switch(action.type){

case GET_COURSE_LIST_REQUEST:{
    return {...state,
        isLoading:true,
        error: null};
}
case GET_COURSE_LIST_SUCCESS:{
    return {...state,
        isLoading:false,
        courseList: action.payload.data,
    }
}
case GET_COURSE_LIST_FAILURE: {
    return{
        ...state,
        isLoading:true,
        error:action.payload.error,
    }
}
default:{
    return state
}
}
}
export default adminCourseReducer;