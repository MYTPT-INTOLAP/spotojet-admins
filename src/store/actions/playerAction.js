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

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbmFtZSI6IkluZHJhbmlsIiwibG5hbWUiOiJNb25kYWwiLCJwaG9uZSI6Ijk4NzY1NDI1ODkiLCJlbWFpbCI6ImFiYy5pbnRvbGFwQGdtYWlsLmNvbSIsInJvbGUiOiJDQWRtaW4iLCJ1c2VySWQiOiI2NGEyYjU5MmNlMDk4ZTkxMTNjOWUxZTQiLCJpYXQiOjE2ODg2MjAyMzEsImV4cCI6MTY4ODY0OTAzMX0.3FnGOLnaMFL3BfymH15c81bRyCXy1zsnoFvzOxKagFk"

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
      // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbmFtZSI6IkluZHJhbmlsIiwibG5hbWUiOiJNb25kYWwiLCJwaG9uZSI6Ijk4NzY1NDI1ODkiLCJlbWFpbCI6ImFiYy5pbnRvbGFwQGdtYWlsLmNvbSIsInJvbGUiOiJDQWRtaW4iLCJ1c2VySWQiOiI2NGEyYjU5MmNlMDk4ZTkxMTNjOWUxZTQiLCJpYXQiOjE2ODg1Njg4MzIsImV4cCI6MTY4ODU5NzYzMn0.DkY6SWyCRgYgBE4fY4v2gES33EE19Y17yhvvFZVnOyA";

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
      // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbmFtZSI6IkluZHJhbmlsIiwibG5hbWUiOiJNb25kYWwiLCJwaG9uZSI6Ijk4NzY1NDI1ODkiLCJlbWFpbCI6ImFiYy5pbnRvbGFwQGdtYWlsLmNvbSIsInJvbGUiOiJDQWRtaW4iLCJ1c2VySWQiOiI2NGEyYjU5MmNlMDk4ZTkxMTNjOWUxZTQiLCJpYXQiOjE2ODg1Mzk5NzQsImV4cCI6MTY4ODU2ODc3NH0.lmL49APZnXn3exgb-C35HRRShFmV4QsU1NifQl3Ivyg";

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

      const response = await axios.put("http://localhost:8080/payer/payersUpdate", data);
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
