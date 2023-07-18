import {
    TEAM_ADD_SUCESS,
    TEAM_ADD_FAIL,
    TEAM_GET_SUCESS,
    TEAM_GET_FAIL,
    TEAM_DELETE_SUCESS,
    TEAM_DELETE_FAIL,
    TEAM_UPDATE_SUCESS,
    TEAM_UPDATE_FAIL
} from "../types/teamTypes";
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

export const AddTeamData = (data) => {
    // console.log("action", data);

    // const sData = data.state;
    // const adminId = data.adminId;

    // console.log("state", sData);
    // console.log("adminId", adminId);

    // console.log("state", data);


    return async (dispatch) => {
        try {
            userAuth(token);

            const response = await axios.post(
                `${SERVER_URI}/team/addTeam`, data
            );
            dispatch({
                type: TEAM_ADD_SUCESS,
                payload: {
                    successMessage: response.data.message
                },
            });
        } catch (error) {
            let data = error.response.data.message;
            // console.log(data)
            dispatch({
                type: TEAM_ADD_FAIL,
                payload: {
                    errorMessage: data,
                },
            });
        }
    };
};

export const GetAllTeams = () => {
    return async (dispatch) => {
        try {
            // userAuth(token);
            const response = await axios.get(`${SERVER_URI}/team/getTeam`);
            dispatch({
                type: TEAM_GET_SUCESS,
                payload: {
                    data: response.data.data
                },
            });
        } catch (error) {
            let data = error.response.data.message;
            console.log(data);
            dispatch({
                type: TEAM_GET_FAIL,
                payload: {
                    errorMessage: data,
                },
            });
        }
    };
};

export const DeleteTeam = (data) => {
    console.log("action", data);
    const teamid = data.teamid;
    const adminId = data.adminId;
    console.log(teamid, adminId)

    return async (dispatch) => {
        try {
            
            userAuth(token);

            const config = {
                headers: {
                    teamid: teamid,
                    adminId: adminId,
                },
            };

            const response = await axios.delete(`${SERVER_URI}/team/deleteTeam`, config);
            console.log(response.data.message);
            dispatch({
                type: TEAM_DELETE_SUCESS,
                payload: {
                    successMessage: response.data.message,
                }
            });
        } catch (error) {
            let data = error.response.data.message;
            console.log(data);
            dispatch({
                type: TEAM_DELETE_FAIL,
                payload: {
                    errorMessage: data,
                },
            });
        }
    };
};

export const UpdateTeam = (data) => {
    console.log("update action", data);

    return async (dispatch) => {
        try {
            
            userAuth(token);

            const response = await axios.patch(`${SERVER_URI}/team/updateTeam`, data);
            console.log(response.data);
            console.log(response.data.message);

            dispatch({
                type: TEAM_UPDATE_SUCESS,
                payload: {
                    successMessage: response.data.message,
                }
            })

        } catch (error) {
            let data = error.response.data.message;
            console.log(data);
            dispatch({
                type: TEAM_UPDATE_FAIL,
                payload: {
                    errorMessage: data,
                },
            });
        }
    }
}