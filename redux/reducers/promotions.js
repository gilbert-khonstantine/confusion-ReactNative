/* eslint-disable prettier/prettier */
import * as ActionTypes from "../actions/ActionTypes"

export const promotions = (state = {
    isLoading: true,
    err: null,
    promos: [],
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PROMOS:
            return { ...state, promos: action.payload, isLoading: false };
        case ActionTypes.PROMOS_FAILED:
            return { ...state, isLoading: false, err: action.payload };
        case ActionTypes.PROMOS_LOADING:
            return state;
        default:
            return state;
    }
}