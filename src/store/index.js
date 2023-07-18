import { configureStore } from "@reduxjs/toolkit";
import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import { PlayerReducer } from "../store/reducers/playerReducer";
import { TeamReducer } from "../store/reducers/teamReducer";
import { AdminReducer } from "../store/reducers/adminReducer";
import { VideoReducer } from "../store/reducers/videoReducer";
import { CategoryReducer } from "./reducers/categoryReducer";
import { ParameterReducer } from "./reducers/parameterReducer";
import { MatchReducer } from "../store/reducers/matchReducer";
import { PositionReducer } from "../store/reducers/positionReducer";


const rootReducer = combineReducers({
  Players: PlayerReducer,
  Teams: TeamReducer,
  Admins: AdminReducer,
  Videos: VideoReducer,
  Category: CategoryReducer,
  Parameters: ParameterReducer,
  Matchs: MatchReducer,
  Positions: PositionReducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;
