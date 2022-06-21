import { combineReducers } from "redux";
import authReducer from "./auth/reducers/authReducer";
import chatListReducer from "./chat/reducers/chatListReducer";
import getNotificationListReducer from "./notification/reducers/getNotificationListReducer";
import notifyVisitorReducer from "./notification/reducers/notifyVisitorReducer";
import unitByIdReducer from "./units/reducers/unitByIdReducer";
import unitsReducer from "./units/reducers/unitsReducer";

const rootReducer = combineReducers({
  units: unitsReducer,
  unitById: unitByIdReducer,
  chatList: chatListReducer,
  notificationList: getNotificationListReducer,
  authReducer: authReducer,
  notifyVisitor: notifyVisitorReducer,
});

export default rootReducer;
