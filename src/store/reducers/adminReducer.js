import {
    ADMIN_ADD_SUCESS,
    ADMIN_ADD_FAIL,
    ADMIN_GET_SUCESS,
    ADMIN_GET_FAIL,
    ADMIN_UPDATE_SUCESS,
    ADMIN_UPDATE_FAIL,
    ADMIN_DELETE_SUCESS,
    ADMIN_DELETE_FAIL,
} from "../types/adminTypes";

const initialState = {
    loading: true,
    error: "",
    successMessage: "",
    data: [],
  };

  export const AdminReducer = (state = initialState, action) =>{
    const { payload, type } = action;
    // console.log(payload);

    if (type === ADMIN_ADD_SUCESS) {
        return {
          ...state,
          successMessage: payload.successMessage,
          data: payload.data
        };
      }
      if (type === ADMIN_ADD_FAIL ) {
        return {
          ...state,
          errorMessage: payload.errorMessage,
        };
      }
      if (type === ADMIN_GET_SUCESS) {
        return {
          ...state,
          data: payload.data,
          error: null,
        };
      }
      if (type === ADMIN_GET_FAIL) {
        return {
          ...state,
          data: null,
          error: payload.errorMessage,
        };
      }
      if (type === ADMIN_DELETE_SUCESS) {
        console.log("reducer 58",payload)
        return {
          ...state,
          successMessage: payload.successMessage,
        };
      }
      if (type === ADMIN_DELETE_FAIL) {
        return {
          ...state,
          errorMessage: payload.errorMessage,
        };
      }
      if (type === ADMIN_UPDATE_SUCESS){
        return{
          ...state,
          successMessage: payload.successMessage,
        }
      }
      if(type === ADMIN_UPDATE_FAIL){
        return {
          ...state,
          errorMessage: payload.errorMessage,
        };
      }
      return state;
  }