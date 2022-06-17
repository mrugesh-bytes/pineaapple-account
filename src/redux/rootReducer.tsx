import { combineReducers } from "redux";
import chatListReducer from "./chat/reducers/chatListReducer";
import unitByIdReducer from "./units/reducers/unitByIdReducer";
import unitsReducer from "./units/reducers/unitsReducer";

const rootReducer = combineReducers({
  units: unitsReducer,
  unitById: unitByIdReducer,
  chatList: chatListReducer,
});

export default rootReducer;
