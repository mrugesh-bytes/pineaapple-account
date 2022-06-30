import { combineReducers } from 'redux';
import authReducer from './auth/reducers/authReducer';
import signupReducer from './auth/reducers/signupReducer';
import chatListReducer from './chat/reducers/chatListReducer';
import getNotificationListReducer from './notification/reducers/getNotificationListReducer';
import notifyVisitorReducer from './notification/reducers/notifyVisitorReducer';
import staffReducer from './staff/reducers/staffReducer';
import { addStaffToastReducer } from './toast/reducers/addStaffToast.reducer';
import unitByIdReducer from './units/reducers/unitByIdReducer';
import unitsReducer from './units/reducers/unitsReducer';

const rootReducer = combineReducers({
    units: unitsReducer,
    unitById: unitByIdReducer,
    chatList: chatListReducer,
    notificationList: getNotificationListReducer,
    authReducer: authReducer,
    signupReducer: signupReducer,
    notifyVisitor: notifyVisitorReducer,
    staff: staffReducer,
    addStaffToast: addStaffToastReducer,
});

export default rootReducer;
