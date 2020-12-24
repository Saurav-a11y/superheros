import { combineReducers } from "redux";
import characterReducer from "./Character/characterReducer";
import comicsReducer from "./Comics/comicsReducer";
import eventsReducer from "./Events/eventsReducer";

const rootReducer = combineReducers({
  events: eventsReducer,
  comics: comicsReducer,
  character: characterReducer,
});

export default rootReducer;
