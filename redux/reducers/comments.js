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
    case ActionTypes.ADD_COMMENT:
      var comment = action.payload;
      comment.id = state.comments.length;
      return { ...state, comments: state.comments.concat(comment) };
    default:
      return state;
  }
};
