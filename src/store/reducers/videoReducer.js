import {
    VIDEO_ADD_SUCESS,
    VIDEO_ADD_FAIL,
    VIDEO_GET_SUCESS,
    VIDEO_GET_FAIL,
    VIDEO_UPDATE_SUCESS,
    VIDEO_UPDATE_FAIL,
    VIDEO_DELETE_SUCESS,
    VIDEO_DELETE_FAIL,
} from "../types/videoTypes";

const initialState = {
    loading: true,
    error: "",
    successMessage: "",
    data: [],
};

export const VideoReducer = (state = initialState, action) => {
    const { payload, type } = action;

    if (type === VIDEO_ADD_SUCESS) {
        return {
            ...state,
            successMessage: payload.successMessage,
        };
    }
    if (type === VIDEO_ADD_FAIL) {
        return {
            ...state,
            errorMessage: payload.errorMessage,
        };
    }
    if (type === VIDEO_GET_SUCESS) {
        return {
            ...state,
            data: payload.data,
            error: null,
        };
    }
    if (type === VIDEO_GET_FAIL) {
        return {
            ...state,
            data: null,
            error: payload.errorMessage,
        };
    }
    if (type === VIDEO_DELETE_SUCESS) {
        return {
            ...state,
            successMessage: payload.successMessage,
        };
    }
    if (type === VIDEO_DELETE_FAIL) {
        return {
            ...state,
            errorMessage: payload.errorMessage,
        };
    }
    if (type === VIDEO_UPDATE_SUCESS) {
        return {
            ...state,
            successMessage: payload.successMessage,
        }
    }
    if (type === VIDEO_UPDATE_FAIL) {
        return {
            ...state,
            errorMessage: payload.errorMessage,
        };
    }
    return state;

}
