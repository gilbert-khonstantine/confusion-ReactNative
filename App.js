import React from 'react';
import Main from './components/Main.component';
import {Provider} from 'react-redux';
import {configureStore} from './redux/store/configureStore';

const store = configureStore();
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
