import { configureStore } from "@reduxjs/toolkit";
import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import { PlayerReducer } from "../store/reducers/playerReducer";
import { TeamReducer } from "../store/reducers/teamReducer";

const rootReducer = combineReducers({
  Players: PlayerReducer,
  Teams: TeamReducer
  // DeletePlayer: DeletePayerReducer
});

const store = configureStore({ reducer: rootReducer });
export default store;
