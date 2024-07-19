//import {applyMiddleware, compose, createStor} from 'redux'
import { createStore, applyMiddleware , compose} from 'redux';
import { thunk } from 'redux-thunk'; 
import rootReducer from '../reducers'

//const store = createStore(rootReducer,compose , applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
   
export default store; 