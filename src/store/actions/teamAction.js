import {
    TEAM_ADD_SUCESS,
    TEAM_ADD_FAIL
} from "../types/teamTypes";
import axios from "axios";

import { SERVER_URI } from '../../config/dev';

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

    const sData = data.state;
    const adminId = data.adminId;

    console.log("state", sData);
    console.log("adminId", adminId);

    return async (dispatch) => {
        try {
            const token =
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbmFtZSI6IkluZHJhbmlsIiwibG5hbWUiOiJNb25kYWwiLCJwaG9uZSI6Ijk4NzY1NDI1ODkiLCJlbWFpbCI6ImFiYy5pbnRvbGFwQGdtYWlsLmNvbSIsInJvbGUiOiJDQWRtaW4iLCJ1c2VySWQiOiI2NGEyYjU5MmNlMDk4ZTkxMTNjOWUxZTQiLCJpYXQiOjE2ODg1Njg4MzIsImV4cCI6MTY4ODU5NzYzMn0.DkY6SWyCRgYgBE4fY4v2gES33EE19Y17yhvvFZVnOyA";
            userAuth(token);

            const config = {
                headers: {
                    adminId: adminId,
                },
            }

            const response = await axios.post(
                "http://localhost:8080/team/addTeam", config,sData
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