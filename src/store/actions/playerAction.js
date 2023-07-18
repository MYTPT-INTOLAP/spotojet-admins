import axios from "axios";
// import { Add_Player } from "../types/playerTypes";
// import { Try } from "@mui/icons-material";
import {
  PLAYER_ADD_SUCESS,
  PLAYER_ADD_FAIL,
  PLAYER_GET_SUCESS,
  PLAYER_GET_FAIL,
  PLAYER_DELETE_SUCESS,
  PLAYER_DELETE_FAIL,
  PLAYER_UPDATE_SUCESS,
  PLAYER_UPDATE_FAIL
} from "../types/playerTypes";

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

export const AddPlayerData = (data) => {
  console.log("action", data);
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${SERVER_URI}/payer/cratePayer`,
        data
      );

      dispatch({
        type: PLAYER_ADD_SUCESS,
        payload: {
          successMessage: response.data.message
        },
      });
    } catch (error) {
      let data = error.response.data.message;
      // console.log(data)
      dispatch({
        type: PLAYER_ADD_FAIL,
        payload: {
          errorMessage: data,
        },
      });
    }
  };
};

export const GetAllPlayers = () => {
  return async (dispatch) => {
    try {
      

      userAuth(token);

      const response = await axios.get(`${SERVER_URI}/payer/getPayers`);
      dispatch({
        type: PLAYER_GET_SUCESS,
        payload: {
          data: response.data.data
        },
      });
    } catch (error) {
      let data = error.response.data.message;
      console.log(data);
      dispatch({
        type: PLAYER_GET_FAIL,
        payload: {
          errorMessage: data,
        },
      });
    }
  };
};

export const DeletePayer = (data) => {
  console.log("action", data);
  const playerid = data.playerId;
  const adminId = data.adminId;
  console.log(playerid, adminId)

  return async (dispatch) => {
    try {

      userAuth(token);

      const config = {
        headers: {
          Playerid: playerid,
          adminId: adminId,
        },
      };

      const response = await axios.delete(`${SERVER_URI}/payer/payersDelete`, config);
      // console.log(response.data.message);
      dispatch({
        type: PLAYER_DELETE_SUCESS,
        payload: {
          successMessage: response.data.message,
        }
      });
    } catch (error) {
      let data = error.response.data.message;
      console.log(data);
      dispatch({
        type: PLAYER_DELETE_FAIL,
        payload: {
          errorMessage: data,
        },
      });
    }
  };
};

export const UpdatePlayer = (data) => {
  console.log("update action", data);

  return async (dispatch) => {
    try {
      // const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbmFtZSI6IkluZHJhbmlsIiwibG5hbWUiOiJNb25kYWwiLCJwaG9uZSI6Ijk4NzY1NDI1ODkiLCJlbWFpbCI6ImFiYy5pbnRvbGFwQGdtYWlsLmNvbSIsInJvbGUiOiJDQWRtaW4iLCJ1c2VySWQiOiI2NGEyYjU5MmNlMDk4ZTkxMTNjOWUxZTQiLCJpYXQiOjE2ODg1Mzk5NzQsImV4cCI6MTY4ODU2ODc3NH0.lmL49APZnXn3exgb-C35HRRShFmV4QsU1NifQl3Ivyg";
      userAuth(token);

      const response = await axios.put(`${SERVER_URI}/payer/payersUpdate`, data);
      console.log(response.data);
      console.log(response.data.message);

      dispatch({
        type: PLAYER_UPDATE_SUCESS,
        payload: {
          successMessage: response.data.message,
        }
      })

    } catch (error) {
      let data = error.response.data.message;
      console.log(data);
      dispatch({
        type: PLAYER_UPDATE_FAIL,
        payload: {
          errorMessage: data,
        },
      });
    }
  }
}
