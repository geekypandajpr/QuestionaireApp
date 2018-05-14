/**
 * 
 * created on :05/11/2018
 * @Author :: $uˆˆ!t
 * 
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppContainer from './containers/AppContainer';


const App = () => {
  return (
    <Provider store={ configureStore({}) }>
      <AppContainer/>
    </Provider>
  );
}

export default App;

