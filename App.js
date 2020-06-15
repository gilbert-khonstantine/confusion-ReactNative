/* eslint-disable prettier/prettier */
import React from 'react';
import Main from './components/Main.component';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store/configureStore';
import Loading from './components/Loading.component';
import { PersistGate } from 'redux-persist/integration/react'

const { persistor, store } = configureStore();
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={<Loading />}
          persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    );
  }
}
