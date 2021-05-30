import {GET_USER_LIST_REQUEST,
    GET_USER_LIST_SUCCESS,
    GET_USER_LIST_FAILURE} 
    from '../constants/admin';
import adminAPI from "../services/adminAPI"

export function getListUser(){
    return async (dispatch) => {
        dispatch({type:GET_USER_LIST_REQUEST})
        try{
            const {data} = await adminAPI.getListUser();
            dispatch({
                type:GET_USER_LIST_SUCCESS,
                payload:{data}
            })
        }catch(error){
            dispatch({
                type:GET_USER_LIST_FAILURE,
                payload:{error:error.reponse.data}
            })
        }
    }
}