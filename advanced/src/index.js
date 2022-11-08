import React from 'react';
import {createRoot} from 'react-dom/client';
import './assets/global.css';
import App from './App';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './store/reducers/index'

const store = configureStore({reducer: rootReducer}); //https://stackoverflow.com/questions/71216724/redux-toolkit-error-reducer-is-a-required-argument-and-must-be-a-function-o

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>
);
