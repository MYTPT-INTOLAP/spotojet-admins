import {
    TEAM_ADD_SUCESS,
    TEAM_ADD_FAIL,
    TEAM_GET_SUCESS,
    TEAM_GET_FAIL,
    TEAM_UPDATE_SUCESS,
    TEAM_UPDATE_FAIL,
    TEAM_DELETE_SUCESS,
    TEAM_DELETE_FAIL,
} from "../types/teamTypes";

const initialState = {
    loading: true,
    error: "",
    successMessage: "",
    data: [],
  };

  export const TeamReducer = (state = initialState, action) =>{
    const { payload, type } = action;
    if (type === TEAM_ADD_SUCESS) {
        return {
          ...state,
          successMessage: payload.successMessage,
        };
      }
      if (type === TEAM_ADD_FAIL ) {
        return {
          ...state,
          errorMessage: payload.errorMessage,
        };
      }
      if (type === TEAM_GET_SUCESS) {
        return {
          ...state,
          data: payload.data,
          error: null,
        };
      }
      if (type === TEAM_GET_FAIL) {
        return {
          ...state,
          data: null,
          error: payload.errorMessage,
        };
      }
      if (type === TEAM_DELETE_SUCESS) {
        console.log("reducer 58",payload)
        return {
          ...state,
          successMessage: payload.successMessage,
        };
      }
      if (type === TEAM_DELETE_FAIL) {
        return {
          ...state,
          errorMessage: payload.errorMessage,
        };
      }
      if (type === TEAM_UPDATE_SUCESS){
        return{
          ...state,
          successMessage: payload.successMessage,
        }
      }
      if(type === TEAM_UPDATE_FAIL){
        return {
          ...state,
          errorMessage: payload.errorMessage,
        };
      }
      return state;
  }