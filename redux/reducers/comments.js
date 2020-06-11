/* eslint-disable prettier/prettier */
import * as ActionTypes from "../actions/ActionTypes"

export const promotions = (state = {
    isLoading: true,
    err: null,
    comments: [],
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return { ...state, comments: action.payload, isLoading: false };
        case ActionTypes.COMMENTS_FAILED:
            return { ...state, isLoading: false, err: action.payload };
        default:
            return state;
    }
}