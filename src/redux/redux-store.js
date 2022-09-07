import { combineReducers, createStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

let configureStore = combineReducers({
  root: rootReducer
})

let store = createStore(configureStore)

export default store