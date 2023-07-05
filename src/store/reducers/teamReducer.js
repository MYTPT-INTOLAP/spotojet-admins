import {
    TEAM_ADD_SUCESS,
    TEAM_ADD_FAIL
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
      return state;
  }