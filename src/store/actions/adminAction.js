import {
    ADMIN_ADD_SUCESS,
    ADMIN_ADD_FAIL,
    ADMIN_GET_SUCESS,
    ADMIN_GET_FAIL,
    ADMIN_DELETE_SUCESS,
    ADMIN_DELETE_FAIL,
    ADMIN_UPDATE_SUCESS,
    ADMIN_UPDATE_FAIL
} from "../types/adminTypes";
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

export const AddAdmin = (data) => {
    console.log("action", data);

    // const sData = data.state;
    // const adminId = data.adminId;

    // console.log("state", sData);
    // console.log("adminId", adminId);

    // console.log("state", data);


    return async (dispatch) => {
        try {
            userAuth(token);

            const response = await axios.post(
                `${SERVER_URI}/admin/signup`, data
            );
            console.log(response.data);
            console.log(response.data.message);

            dispatch({
                type: ADMIN_ADD_SUCESS,
                payload: {
                    successMessage: response.data.message
                },
            });
        } catch (error) {
            let data = error.response.data.message;
            // console.log(data)
            dispatch({
                type: ADMIN_ADD_FAIL,
                payload: {
                    errorMessage: data,
                },
            });
        }
    };
};

export const GetAllCoaches = () => {
    return async (dispatch) => {
        try {
            userAuth(token);
            const response = await axios.get(`${SERVER_URI}/admin/getCoach`);
            // console.log(response.data.data);
            dispatch({
                type: ADMIN_GET_SUCESS,
                payload: {
                    data: response.data.data,
                    successMessage : response.data.message
                },
            });
        } catch (error) {
            let data = error.response.data.message;
            console.log(data);
            dispatch({
                type: ADMIN_GET_FAIL,
                payload: {
                    errorMessage: data,
                },
            });
        }
    };
};

export const UpdateAdmin = (data) => {
    console.log("update action", data);
    console.log("update action adminid  ", data.adminId);

    return async (dispatch) => {
        try { 
            const x = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbmFtZSI6Inh5IiwibG5hbWUiOiJ6IiwicGhvbmUiOiI5ODcyMjI0NDg5IiwiZW1haWwiOiJ0aXRhc21vbmRhbDI5OUBnbWFpbC5jb20iLCJyb2xlIjoiQ29hY2giLCJ1c2VySWQiOiI2NGE3ZGI1ZjhlZDM1NGQzODgzZmM0MWYiLCJpYXQiOjE2ODg3MjMwNTMsImV4cCI6MTY4ODc1MTg1M30.SmWfGhztSW7mLf36_IqW_AmMTNJagrI6qxlSbcQ_Fk0"     
            userAuth(x);

            // const config = {
            //     headers: {
            //       adminid: data.adminId,
            //     },
            //   };

            //   const sdata = {...data,adminId: false}
            //   console.log(sdata);

            const response = await axios.put(`${SERVER_URI}/admin/userUpdate`,data);
            console.log(response.data);
            console.log(response.data.message);
            dispatch({
                type: ADMIN_UPDATE_SUCESS,
                payload: {
                    successMessage: response.data.message,
                }
            })

        } catch (error) {
            let data = error.response.data.message;
            console.log(data);
            dispatch({
                type: ADMIN_UPDATE_FAIL,
                payload: {
                    errorMessage: data,
                },
            });
        }
    }
}

export const DeleteAdmin = (data) => {
    /*AFTER PERMISSION */
    // console.log("action", data);
    // // const teamid = data.teamid;
    // const adminId = data.adminId;
    // console.log(adminId)

    // return async (dispatch) => {
    //     try { 
    //         userAuth(token);
    //         const config = {
    //             headers: {
    //                 adminId: adminId,
    //             },
    //         };

    //         const response = await axios.delete(`${SERVER_URI}/admin/userDelete`, config);
    //         console.log(156,response.data.message);
    //         dispatch({
    //             type: ADMIN_DELETE_SUCESS,
    //             payload: {
    //                 successMessage: response.data.message,
    //             }
    //         });
    //     } catch (error) {
    //         let data = error.response.data.message;
    //         console.log(data);
    //         dispatch({
    //             type: ADMIN_DELETE_FAIL,
    //             payload: {
    //                 errorMessage: data,
    //             },
    //         });
    //     }
    // };
};