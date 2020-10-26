import React from 'react';
import { Provider } from 'react-redux';

import store from './Redux/store';
import './App.css';
import Login from './Components/Login/Login';

class App extends React.Component {
    render() {
      return (
          <Provider store={store}>
          <div className='App'>
            <Login />
          </div>
          </Provider>
      )
    }
}

export default App;
