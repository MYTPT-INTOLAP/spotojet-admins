import {
  CATEGORY_ADD_SUCESS,
  CATEGORY_ADD_FAIL,
  CATEGORY_GET_SUCESS,
  CATEGORY_GET_FAIL,
  CATEGORY_DELETE_SUCESS,
  CATEGORY_DELETE_FAIL,
  CATEGORY_UPDATE_SUCESS,
  CATEGORY_UPDATE_FAIL
} from "../types/categoryTypes";

const initialState = {
  categoryErrorMessage: "",
  categorySuccessMessage: "",
  catData: [],
};

export const CategoryReducer = (state = initialState, action) => {
  const { payload, type } = action;

  if (type === CATEGORY_ADD_SUCESS) {
    return {
      ...state,
      categorySuccessMessage: payload.successMessage,
      catData: payload.data
    };
  }
  if (type === CATEGORY_ADD_FAIL) {
    return {
      ...state,
      categoryErrorMessage: payload.errorMessage,
    };
  }

  if (type === CATEGORY_GET_SUCESS) {
    return {
      ...state,
      catData: payload.data,
      categoryErrorMessage: null,
    };
  }
  if (type === CATEGORY_GET_FAIL) {
    return {
      ...state,
      catData: null,
      categoryErrorMessage: payload.errorMessage,
    };
  }


  return state;
}