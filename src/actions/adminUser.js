import adminAPI from 'src/services/adminAPI';
import {GET_USER_LIST_REQUEST,
    GET_USER_LIST_SUCCESS,
    GET_USER_LIST_FAILURE,
    POST_USER_REQUEST,
    POST_USER_SUCCESS,
    POST_USER_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    PUT_USER_REQUEST,
    PUT_USER_SUCCESS,
    PUT_USER_FAILURE,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
}
    from '../constants/adminUser';

export function getUserList(){
    return async (dispatch) => {
        dispatch({type:GET_USER_LIST_REQUEST})
        try{
            const {data} = await adminAPI.getUserList();
            dispatch({
                type:GET_USER_LIST_SUCCESS,
                payload:{data}
            })
        }catch(error){
            dispatch({
                type:GET_USER_LIST_FAILURE,
                payload:{error:error.response.data}
            })
        }
    }
}


//findUserByName
export function getUser(values) {
    return async (dispatch) => {
        dispatch({type:GET_USER_REQUEST})
        try{
            const {data} = await adminAPI.getUser(values);
            dispatch({
                type:GET_USER_SUCCESS,
                payload: data[0],
            })
        }catch(error){
            dispatch({
                type:GET_USER_FAILURE,
                payload:{error:error.data}
            })
        }
    }
}

export function addUser(values) {
    return async (dispatch) => {
        dispatch({type:POST_USER_REQUEST})
        try{
            const {data} = await adminAPI.addUser(values);
            alert('Add User Successfully');
            dispatch({
                type: POST_USER_SUCCESS,
                payload:{data}
            })
        }catch(error){
            dispatch({
                type:POST_USER_FAILURE,
                payload: {error:error.data}
            })
        }
    }
}

export function updateUser(values){
    return async (dispatch) => {
        dispatch({type: PUT_USER_REQUEST})
        try{
            const {data} = await adminAPI.updateUser(values);
            alert('Update User Successfully');

            dispatch({
                type:PUT_USER_SUCCESS,
                payload:{data}
            })
        }catch(error){
            alert(error.data)

            dispatch({
                type:PUT_USER_FAILURE,
                payload: {error:error.data}
            })
        }
    }
}

export function deleteUser(values){
    return async (dispatch)=> {
        dispatch({type: DELETE_USER_REQUEST})
        try{
            const{data} = await adminAPI.deleteUser(values);
            alert('Detele User Successfully');
            dispatch({
                type:DELETE_USER_SUCCESS,
                payload:{data}
            })
        }catch(error){
            alert(error.data)
            dispatch({
                type:DELETE_USER_FAILURE,
                payload: {error:error.data}
            })
        }
    }
}