import {Provider} from 'react-redux'
import {createStore, compose, applyMiddleware} from 'redux'
import rootReducer from './src/reducers';
 
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(

  rootReducer,
  composeEnhancer(
    applyMiddleware(
      thunk,
      createLogger()
    ),
  ),
);

export {store}