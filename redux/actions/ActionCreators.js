/* eslint-disable prettier/prettier */
import { baseUrl } from '../../shared/baseUrl';
import * as ActionTypes from './ActionTypes';

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
          error.response = response;
          throw error;
        }
      },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      },
    )
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = errmess => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess,
});

export const addComments = comments => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});

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
          error.response = response;
          throw error;
        }
      },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      },
    )
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
};

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = errmess => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess,
});

export const addDishes = dishes => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});

export const fetchPromos = () => dispatch => {
  dispatch(promosLoading());

  return fetch(baseUrl + 'promotions')
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            'Error ' + response.status + ': ' + response.statusText,
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      },
    )
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
};

export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING,
});

export const promosFailed = errmess => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errmess,
});

export const addPromos = promos => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos,
});

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
          error.response = response;
          throw error;
        }
      },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      },
    )
    .then(response => response.json())
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(error => dispatch(leadersFailed(error.message)));
};

export const leadersLoading = () => ({
  type: ActionTypes.LEADERS_LOADING,
});

export const leadersFailed = errmess => ({
  type: ActionTypes.LEADERS_FAILED,
  payload: errmess,
});

export const addLeaders = leaders => ({
  type: ActionTypes.ADD_LEADERS,
  payload: leaders,
});

export const postFavorite = (dishId) => (dispatch) => {

  setTimeout(() => {
    dispatch(addFavorite(dishId));
  }, 0);
};

export const addFavorite = (dishId) => ({
  type: ActionTypes.ADD_FAVORITE,
  payload: dishId
});

export const postComment = (comment) => (dispatch) => {
  setTimeout(() => {
    dispatch(addComment(comment));
  }, 0);
};

export const addComment = (comment) => {
  comment.date = new Date();
  fetch(baseUrl + 'comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  return ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment,
  });
};

export const removeFavorite = (dishId) => {
  return ({
    type: ActionTypes.REMOVE_FAVORITE,
    payload: dishId,
  });
}