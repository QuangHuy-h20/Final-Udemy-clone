import {
    GET_USER_LIST_REQUEST,
    GET_USER_LIST_SUCCESS,
    GET_USER_LIST_FAILURE
} from "../constants/admin"

const initialState = {
    userList: [],
    isLoading: false,
    error: null,
};

function adminReducer(state = initialState,action){
    switch(action.type){
        case GET_USER_LIST_REQUEST:{
            return {...state, 
                isLoading:true, 
                error: null};
        }
        case GET_USER_LIST_SUCCESS:{
            return {...state, 
                isLoading:false, 
                userList: action.payload.data,
            }
        }
        case GET_USER_LIST_FAILURE: {
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
export default adminReducer