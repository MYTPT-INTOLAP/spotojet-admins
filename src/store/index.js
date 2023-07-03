import { configureStore } from '@reduxjs/toolkit'
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';

const rootReducer = combineReducers({
    
});

const store = configureStore({reducer: rootReducer});
export default store;
