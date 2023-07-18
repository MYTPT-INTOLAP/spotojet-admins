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

const initialState = {
    loading: true,
    error: "",
    successMessage: "",
    matchData: [],
};

export const MatchReducer = (state = initialState, action) => {
    const { payload, type } = action;
    if (type === MATCH_ADD_SUCESS) {
        return {
            ...state,
            successMessage: payload.successMessage,
        };
    }
    if (type === MATCH_ADD_FAIL) {
        return {
            ...state,
            errorMessage: payload.errorMessage,
        };
    }

    if (type === MATCH_GET_SUCESS) {
        return {
            ...state,
            matchData: payload.data,
            error: null,
        };
    }
    if (type === MATCH_GET_FAIL) {
        return {
            ...state,
            matchData: null,
            error: payload.errorMessage,
        };
    }

    if (type === MATCH_DELETE_SUCESS) {
        console.log("reducer 58", payload)
        return {
            ...state,
            successMessage: payload.successMessage,
        };
    }
    if (type === MATCH_DELETE_FAIL) {
        return {
            ...state,
            errorMessage: payload.errorMessage,
        };
    }

    if (type === MATCH_UPDATE_SUCESS) {
        return {
            ...state,
            successMessage: payload.successMessage,
        }
    }
    if (type === MATCH_UPDATE_FAIL) {
        return {
            ...state,
            errorMessage: payload.errorMessage,
        };
    }
    return state;
}