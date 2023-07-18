import {
    POSITION_ADD_SUCESS,
    POSITION_ADD_FAIL,
    POSITION_GET_SUCESS,
    POSITION_GET_FAIL,
    POSITION_DELETE_SUCESS,
    POSITION_DELETE_FAIL,
    POSITION_UPDATE_SUCESS,
    POSITION_UPDATE_FAIL,
    POSITION_SUCESS_MSG_CLEAR
} from "../types/positionTypes";

const initialState = {
    posLoading: true,
    posErrorMessage: "",
    posSuccessMessage: "",
    posData: [],
  };

  export const PositionReducer = (state = initialState, action) => {
    const { payload, type } = action;
    if (type === POSITION_ADD_SUCESS) {
        console.log(22,payload.successMessage)
      return {
        ...state,
        posSuccessMessage: payload.successMessage,
      };
    }
    if (type === POSITION_ADD_FAIL) {
      return {
        ...state,
        posErrorMessage: payload.errorMessage,
      };
    }
  
    if (type === POSITION_GET_SUCESS) {
      return {
        ...state,
        posData: payload.data,
        error: null,
      };
    }
    if (type === POSITION_GET_FAIL) {
      return {
        ...state,
        posData: null,
        posErrorMessage: payload.errorMessage,
      };
    }


    if (type === POSITION_SUCESS_MSG_CLEAR) {
        return {
          ...state,
          posSuccessMessage: null,
        };
      }

  
    if (type === POSITION_DELETE_SUCESS) {
    //   console.log("reducer 58",payload)
      return {
        ...state,
        posSuccessMessage: payload.successMessage,
      };
    }
    if (type === POSITION_DELETE_FAIL) {
      return {
        ...state,
        posErrorMessage: payload.errorMessage,
      };
    }
  
    if (type === POSITION_UPDATE_SUCESS){
      return{
        ...state,
        posSuccessMessage: payload.successMessage,
      }
    }
    if(type === POSITION_UPDATE_FAIL){
      return {
        ...state,
        posErrorMessage: payload.errorMessage,
      };
    }
    return state;
  };
  