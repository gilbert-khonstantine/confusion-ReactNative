/* eslint-disable prettier/prettier */
import * as ActionTypes from '../actions/ActionTypes';

export const promotions = (
  state = {
    isLoading: true,
    err: null,
    promos: [],
  },
  action,
) => {
  switch (action.type) {
    case ActionTypes.ADD_PROMOS:
      return {...state, promos: action.payload, isLoading: false, err: null};
    case ActionTypes.PROMOS_FAILED:
      return {...state, isLoading: false, err: action.payload, promos: []};
    case ActionTypes.PROMOS_LOADING:
      return {
        isLoading: true,
        err: null,
        promos: [],
      };
    default:
      return state;
  }
};
