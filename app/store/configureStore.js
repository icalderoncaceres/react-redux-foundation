/* import dependencies */
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

/* thunk */
const middleware = [thunk];

middleware.push(createLogger());

/* export my store */
export default () => {
  return createStore(rootReducer, applyMiddleware(...middleware));
};
