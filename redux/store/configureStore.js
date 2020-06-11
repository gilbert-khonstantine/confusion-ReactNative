/* eslint-disable prettier/prettier */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { dishes } from '../reducers/dishes';
import { comments } from '../reducers/comments';
import { promotions } from '../reducers/promotions';
import { leaders } from '../reducers/leaders';
import { favorites } from '../reducers/favorites';

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      dishes,
      comments,
      promotions,
      leaders,
      favorites,
    }),
    applyMiddleware(thunk, logger),
  );

  return store;
};
