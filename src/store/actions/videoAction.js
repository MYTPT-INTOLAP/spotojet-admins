import {
    VIDEO_ADD_SUCESS,
    VIDEO_ADD_FAIL,
    VIDEO_GET_SUCESS,
    VIDEO_GET_FAIL,
    VIDEO_DELETE_SUCESS,
    VIDEO_DELETE_FAIL,
    VIDEO_UPDATE_SUCESS,
    VIDEO_UPDATE_FAIL
} from "../types/videoTypes";
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

export const AddVideoData = (data) => {
    console.log("from addVideo action", data);
    console.log(data.adminId)
    const fromData = new FormData();
    fromData.append("video", data.video);
    fromData.append("coachId", data.coachId);
    fromData.append("report", data.report);
    fromData.append("players", data.players);
    fromData.append("comment", data.comment);

    return async (dispatch) => {
        try {
            userAuth(token);

            const config = {
                headers: {
                    adminId: data.adminId,
                },
            };

            const response = await axios.post(
                `${SERVER_URI}/video/addVideo`, fromData, config
            );
            console.log(response)
            dispatch({
                type: VIDEO_ADD_SUCESS,
                payload: {
                    successMessage: response.data.message
                },
            });
        } catch (error) {
            let data = error.response.data.message;
            dispatch({
                type: VIDEO_ADD_FAIL,
                payload: {
                    errorMessage: data,
                },
            });
        }

    }

}

export const GetAllVideos = () => {
    return async (dispatch) => {
        try {
            // userAuth(token);
            const response = await axios.get(`${SERVER_URI}/video/getVideo`);
            dispatch({
                type: VIDEO_GET_SUCESS,
                payload: {
                    data: response.data.data
                },
            });
        } catch (error) {
            let data = error.response.data.message;
            console.log(data);
            dispatch({
                type: VIDEO_GET_FAIL,
                payload: {
                    errorMessage: data,
                },
            });
        }
    };
};

export const DeleteVideo= (data) => {
    console.log("action", data);
    const videoid = data.videoid;
    const adminId = data.adminId;
    console.log(videoid, adminId)

    return async (dispatch) => {
        try {
            
            userAuth(token);

            const config = {
                headers: {
                    videoid: videoid,
                    adminId: adminId,
                },
            };

            const response = await axios.delete(`${SERVER_URI}/video/deleteVideo`, config);
            console.log(response.data.message);
            dispatch({
                type: VIDEO_DELETE_SUCESS,
                payload: {
                    successMessage: response.data.message,
                }
            });
        } catch (error) {
            let data = error.response.data.message;
            console.log(data);
            dispatch({
                type: VIDEO_DELETE_FAIL,
                payload: {
                    errorMessage: data,
                },
            });
        }
    };
};

export const UpdateVideo = (data) => {
    console.log("update action", data);

    return async (dispatch) => {
        try {
            console.log("inside try", data.adminId)
            userAuth(token);

            const config = {
                headers: {
                    adminId: data.adminId,
                },
            };

            const response = await axios.patch(`${SERVER_URI}/video/updateVideo`, data, config);
            console.log(response.data);
            console.log(response.data.message);

            dispatch({
                type: VIDEO_UPDATE_SUCESS,
                payload: {
                    successMessage: response.data.message,
                }
            })

        } catch (error) {
            let data = error.response.data.message;
            console.log(data);
            dispatch({
                type: VIDEO_UPDATE_FAIL,
                payload: {
                    errorMessage: data,
                },
            });
        }
    }
}