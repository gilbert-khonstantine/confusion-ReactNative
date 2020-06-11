/* eslint-disable prettier/prettier */
import baseUrl from '../../shared/baseUrl';
import * as ActionTypes from './ActionTypes';

export const fetchDishes = () => dispatch => {
  dispatch(dishesLoading());
  return fetch(baseUrl + 'dishes')
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            'Error ' + response.status + ': ' + response.statusText,
          );
          error.response = error;
          throw error;
        }
      },
      error => {
        let err = new Error(error.message);
        throw err;
      },
    )
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(err => dispatch(dishesFailed(err.message)));
};

export const dishesLoading = () => {
  return {
    type: ActionTypes.DISHES_LOADING,
  };
};

export const dishesFailed = err => {
  return {
    type: ActionTypes.DISHES_FAILED,
    payload: err,
  };
};

export const addDishes = dishes => {
  return {
    type: ActionTypes.ADD_DISHES,
    payload: dishes,
  };
};

export const fetchLeaders = () => dispatch => {
  dispatch(leadersLoading());
  return fetch(baseUrl + 'leaders')
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            'Error ' + response.status + ': ' + response.statusText,
          );
          error.response = error;
          throw error;
        }
      },
      error => {
        let err = new Error(error.message);
        throw err;
      },
    )
    .then(response => response.json())
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(err => dispatch(leadersFailed(err.message)));
};

export const leadersLoading = () => {
  return {
    type: ActionTypes.LEADERS_LOADING,
  };
};

export const leadersFailed = err => {
  return {
    type: ActionTypes.LEADERS_FAILED,
    payload: err,
  };
};

export const addLeaders = leaders => {
  return {
    type: ActionTypes.ADD_LEADERS,
    payload: leaders,
  };
};

export const fetchPromotions = () => dispatch => {
  dispatch(promoLoading());
  return fetch(baseUrl + 'promotions')
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            'Error ' + response.status + ': ' + response.statusText,
          );
          error.response = error;
          throw error;
        }
      },
      error => {
        let err = new Error(error.message);
        throw err;
      },
    )
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(err => dispatch(promosFailed(err.message)));
};

export const promoLoading = () => {
  return {
    type: ActionTypes.PROMOS_LOADING,
  };
};

export const promosFailed = err => {
  return {
    type: ActionTypes.PROMOS_FAILED,
    payload: err,
  };
};

export const addPromos = promos => {
  return {
    type: ActionTypes.ADD_PROMOS,
    payload: promos,
  };
};

export const fetchComments = () => dispatch => {
  return fetch(baseUrl + 'comments')
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            'Error ' + response.status + ': ' + response.statusText,
          );
          error.response = error;
          throw error;
        }
      },
      error => {
        let err = new Error(error.message);
        throw err;
      },
    )
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(err => dispatch(commentsFailed(err.message)));
};

export const commentsFailed = err => {
  return {
    type: ActionTypes.COMMENTS_FAILED,
    payload: err,
  };
};

export const addComments = comments => {
  return {
    type: ActionTypes.ADD_COMMENTS,
    payload: comments,
  };
};
