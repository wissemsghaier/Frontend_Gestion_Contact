import contactReducer from './contact.reducers'
import { combineReducers } from 'redux';

//import {combineReducer} from 'redux'

const rootReducer = combineReducers ({
    contact : contactReducer
})
export default rootReducer;