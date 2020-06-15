/* eslint-disable prettier/prettier */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { dishes } from '../reducers/dishes';
import { comments } from '../reducers/comments';
import { promotions } from '../reducers/promotions';
import { leaders } from '../reducers/leaders';
import { favorites } from '../reducers/favorites';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const config = {
  key: 'root',
  storage,
  debug: true
}

export const configureStore = () => {
  const store = createStore(
    persistCombineReducers(config, {
      dishes,
      comments,
      promotions,
      leaders,
      favorites,
    }),
    applyMiddleware(thunk, logger),
  );

  const persistor = persistStore(store);

  return { persistor, store };
};
