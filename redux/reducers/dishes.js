/* eslint-disable prettier/prettier */
import * as ActionTypes from '../actions/ActionTypes';

export const dishes = (
  state = {
    isLoading: true,
    err: null,
    dishes: [],
  },
  action,
) => {
  switch (action.type) {
    case ActionTypes.ADD_DISHES:
      return {...state, dishes: action.payload, isLoading: false};
    case ActionTypes.DISHES_FAILED:
      return {...state, isLoading: false, err: action.payload};
    case ActionTypes.DISHES_LOADING:
      return state;
    default:
      return state;
  }
};
