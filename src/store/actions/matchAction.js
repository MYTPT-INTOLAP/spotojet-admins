import {
    MATCH_ADD_SUCESS,
    MATCH_ADD_FAIL,
    MATCH_GET_SUCESS,
    MATCH_GET_FAIL,
    MATCH_DELETE_SUCESS,
    MATCH_DELETE_FAIL,
    MATCH_UPDATE_SUCESS,
    MATCH_UPDATE_FAIL
} from "../types/matchTypes"
import axios from "axios";

import { SERVER_URI } from '../../config/dev';

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbmFtZSI6IkluZHJhbmlsIiwibG5hbWUiOiJNb25kYWwiLCJwaG9uZSI6Ijk4NzY1NDI1ODkiLCJlbWFpbCI6ImluZHJhbmlsLmludG9sYXBAZ21haWwuY29tIiwicm9sZSI6IlNBZG1pbiIsInVzZXJJZCI6IjY0YTJiMTM4MDAzNTdlYmE0N2FkMGY4MyIsImlhdCI6MTY4ODcyNzA5MSwiZXhwIjoxNjg4NzU1ODkxfQ.lzxv6OdGYROql1KTB4gdORmO2PASBeytrofd9dw1ldA" // sMATCH --> indranil.intolap@gmail.com
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbmFtZSI6ImFiYyIsImxuYW1lIjoiTW9uZGFsIiwicGhvbmUiOiI5ODc2NTQyNTg5IiwiZW1haWwiOiJhYmMuaW50b2xhcEBnbWFpbC5jb20iLCJyb2xlIjoiQ0FkbWluIiwidXNlcklkIjoiNjRhN2Y4NTIyNzdjZGQ2NTViODQwOThiIiwiaWF0IjoxNjg5NTk5OTU4LCJleHAiOjE2ODk2Mjg3NTh9.mJa8_Bbf5T6j6rEBfgJPJ9cnlIiWYv632-ueLJ_NSqo" // cMATCH --> abc.intolap@gmail.com
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

export const AddMatchData = (data) => {
    console.log("action", data);
    return async (dispatch) => {
        try {
            const response = await axios.post(
                `${SERVER_URI}/match_data/addMatch`,
                data
            );

            dispatch({
                type: MATCH_ADD_SUCESS,
                payload: {
                    successMessage: response.data.message
                },
            });
        } catch (error) {
            let data = error.response.data.message;
            // console.log(data)
            dispatch({
                type: MATCH_ADD_FAIL,
                payload: {
                    errorMessage: data,
                },
            });
        }
    };
};

export const GetAllMatchData = () => {
    return async (dispatch) => {
        try {
            userAuth(token);

            const response = await axios.get(`${SERVER_URI}/match_data/getMatch`);
            // console.log(66,response.data);
            dispatch({
                type: MATCH_GET_SUCESS,
                payload: {
                    data: response.data.data
                },
            });
        } catch (error) {
            let data = error.response.data.message;
            console.log(data);
            dispatch({
                type: MATCH_GET_FAIL,
                payload: {
                    errorMessage: data,
                },
            });
        }
    };
};

export const DeleteMatchData = (data) => {
    console.log("action", data);
    const matchid = data.matchId;
    const adminId = data.adminId;
    console.log(matchid, adminId)

    return async (dispatch) => {
        try {

            userAuth(token);

            const config = {
                headers: {
                    matchid: matchid,
                    adminId: adminId,
                },
            };

            const response = await axios.delete(`${SERVER_URI}/match_data/matchDelete`, config);
            console.log(response.data.message);
            dispatch({
                type: MATCH_DELETE_SUCESS,
                payload: {
                    successMessage: response.data.message,
                }
            });
        } catch (error) {
            let data = error.response.data.message;
            console.log(data);
            dispatch({
                type: MATCH_DELETE_FAIL,
                payload: {
                    errorMessage: data,
                },
            });
        }
    };
};

export const UpdateMatchData = (data) => {
    console.log("update action", data);
  
    return async (dispatch) => {
      try {
        
        userAuth(token);
  
        const response = await axios.patch(`${SERVER_URI}/match_data/matchUpdate`, data);
        console.log(response.data);
        console.log(response.data.message);
  
        dispatch({
          type: MATCH_UPDATE_SUCESS,
          payload: {
            successMessage: response.data.message,
          }
        })
  
      } catch (error) {
        let data = error.response.data.message;
        console.log(data);
        dispatch({
          type: MATCH_UPDATE_FAIL,
          payload: {
            errorMessage: data,
          },
        });
      }
    }
  }