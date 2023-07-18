import {
    PARAMETER_ADD_SUCESS,
    PARAMETER_ADD_FAIL,
    PARAMETER_GET_SUCESS,
    PARAMETER_GET_FAIL,
    PARAMETER_DELETE_SUCESS,
    PARAMETER_DELETE_FAIL,
    PARAMETER_UPDATE_SUCESS,
    PARAMETER_UPDATE_FAIL
} from "../types/parameterTypes";

const initialState = {
    paramErrorMessage: "",
    paramSuccessMessage: "",
    paramData: [],
};

export const ParameterReducer = (state = initialState, action) => {
    const { payload, type } = action;

    if (type === PARAMETER_ADD_SUCESS) {
        return {
          ...state,
          paramSuccessMessage: payload.successMessage,
          paramData: payload.data
        };
      }
      if (type === PARAMETER_ADD_FAIL) {
        return {
          ...state,
          paramErrorMessage: payload.errorMessage,
        };
      }
    
      if (type === PARAMETER_GET_SUCESS) {
        return {
          ...state,
          paramData: payload.data,
          paramErrorMessage: null,
        };
      }
      if (type === PARAMETER_GET_FAIL) {
        return {
          ...state,
          paramData: null,
          paramErrorMessage: payload.errorMessage,
        };
      }
      return state;
}