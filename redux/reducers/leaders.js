/* eslint-disable prettier/prettier */
import * as ActionTypes from "../actions/ActionTypes"

export const leaders = (state = {
    isLoading: true,
    err: null,
    leaders: [],
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LEADERS:
            return { ...state, leaders: action.payload, isLoading: false };
        case ActionTypes.LEADERS_FAILED:
            return { ...state, isLoading: false, err: action.payload };
        case ActionTypes.LEADERS_LOADING:
            return state;
        default:
            return state;
    }
}