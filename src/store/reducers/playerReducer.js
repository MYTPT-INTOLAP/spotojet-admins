import {
  PLAYER_ADD_SUCESS,
  PLAYER_ADD_FAIL,
  PLAYER_GET_SUCESS,
  PLAYER_GET_FAIL,
  PLAYER_DELETE_SUCESS,
  PLAYER_DELETE_FAIL,
  PLAYER_UPDATE_SUCESS,
  PLAYER_UPDATE_FAIL,
} from "../types/playerTypes";


const initialState = {
  loading: true,
  error: "",
  successMessage: "",
  data: [],
};

export const PlayerReducer = (state = initialState, action) => {
  const { payload, type } = action;
  if (type === PLAYER_ADD_SUCESS) {
    return {
      ...state,
      successMessage: payload.successMessage,
    };
  }
  if (type === PLAYER_ADD_FAIL) {
    return {
      ...state,
      errorMessage: payload.errorMessage,
    };
  }

  if (type === PLAYER_GET_SUCESS) {
    return {
      ...state,
      data: payload.data,
      error: null,
    };
  }
  if (type === PLAYER_GET_FAIL) {
    return {
      ...state,
      data: null,
      error: payload.errorMessage,
    };
  }

  if (type === PLAYER_DELETE_SUCESS) {
    console.log("reducer 58",payload)
    return {
      ...state,
      successMessage: payload.successMessage,
    };
  }
  if (type === PLAYER_DELETE_FAIL) {
    return {
      ...state,
      errorMessage: payload.errorMessage,
    };
  }

  if (type === PLAYER_UPDATE_SUCESS){
    return{
      ...state,
      successMessage: payload.successMessage,
    }
  }
  if(type === PLAYER_UPDATE_FAIL){
    return {
      ...state,
      errorMessage: payload.errorMessage,
    };
  }
  return state;
};
