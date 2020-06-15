/* eslint-disable prettier/prettier */
import * as ActionTypes from '../actions/ActionTypes';

export const favorites = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_FAVORITE:
            if (state.some(el => el === action.payload))
                return state;
            else
                return state.concat(action.payload);
        case ActionTypes.REMOVE_FAVORITE:
            return state.filter(dish => dish !== action.payload);
        default:
            return state;
    }
}