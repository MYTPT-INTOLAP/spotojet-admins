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
import axios from "axios";

import { SERVER_URI } from '../../config/dev';

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbmFtZSI6IkluZHJhbmlsIiwibG5hbWUiOiJNb25kYWwiLCJwaG9uZSI6Ijk4NzY1NDI1ODkiLCJlbWFpbCI6ImluZHJhbmlsLmludG9sYXBAZ21haWwuY29tIiwicm9sZSI6IlNBZG1pbiIsInVzZXJJZCI6IjY0YTJiMTM4MDAzNTdlYmE0N2FkMGY4MyIsImlhdCI6MTY4ODcyNzA5MSwiZXhwIjoxNjg4NzU1ODkxfQ.lzxv6OdGYROql1KTB4gdORmO2PASBeytrofd9dw1ldA" // sAdmin --> indranil.intolap@gmail.com
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbmFtZSI6ImFiYyIsImxuYW1lIjoiTW9uZGFsIiwicGhvbmUiOiI5ODc2NTQyNTg5IiwiZW1haWwiOiJhYmMuaW50b2xhcEBnbWFpbC5jb20iLCJyb2xlIjoiQ0FkbWluIiwidXNlcklkIjoiNjRhN2Y4NTIyNzdjZGQ2NTViODQwOThiIiwiaWF0IjoxNjg5NTk5OTU4LCJleHAiOjE2ODk2Mjg3NTh9.mJa8_Bbf5T6j6rEBfgJPJ9cnlIiWYv632-ueLJ_NSqo" // cAdmin --> abc.intolap@gmail.com
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbmFtZSI6Inh5IiwibG5hbWUiOiJ6IiwicGhvbmUiOiI5ODcyMjI0NDg5IiwiZW1haWwiOiJ0aXRhc21vbmRhbDI5OUBnbWFpbC5jb20iLCJyb2xlIjoiQ29hY2giLCJ1c2VySWQiOiI2NGE3ZGI1ZjhlZDM1NGQzODgzZmM0MWYiLCJpYXQiOjE2ODg3MjMwNTMsImV4cCI6MTY4ODc1MTg1M30.SmWfGhztSW7mLf36_IqW_AmMTNJagrI6qxlSbcQ_Fk0" // coach

export const userAuth = (token) => {
  axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

export const GetAllCat = () => {
  return async (dispatch) => {
    try {
      userAuth(token);

      const response = await axios.get(`${SERVER_URI}/category/getCategory`);
      dispatch({
        type: CATEGORY_GET_SUCESS,
        payload: {
          data: response.data.data
        },
      });
    } catch (error) {
      let data = error.response.data.message;
      console.log(data);
      dispatch({
        type: CATEGORY_GET_FAIL,
        payload: {
          errorMessage: data,
        },
      });
    }
  }
}
 
export const AddCategory= (data) => {
  console.log("action", data);
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${SERVER_URI}/category/addCategory`,
        data
      );

      dispatch({
        type: CATEGORY_ADD_SUCESS,
        payload: {
          successMessage: response.data.message
        },
      });
    } catch (error) {
      let data = error.response.data.message;
      // console.log(data)
      dispatch({
        type: CATEGORY_ADD_FAIL,
        payload: {
          errorMessage: data,
        },
      });
    }
  };
};