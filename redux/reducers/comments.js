/* eslint-disable prettier/prettier */
import * as ActionTypes from '../actions/ActionTypes';

export const comments = (
  state = {
    isLoading: true,
    err: null,
    comments: [],
  },
  action,
) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return { ...state, comments: action.payload, isLoading: false, err: null };
    case ActionTypes.COMMENTS_FAILED:
      return { ...state, isLoading: false, err: action.payload, comments: [] };
    default:
      return state;
  }
};
