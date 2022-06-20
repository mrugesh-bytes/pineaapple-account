import { GET_NOTIFICATION_LIST_FAILURE, GET_NOTIFICATION_LIST_REQUEST, GET_NOTIFICATION_LIST_SUCCESS } from '../constants/getNotification.constant';

const initialState = {
  loading: false,
  data: [],
  errorMsg: '',
};

const getNotificationListReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_NOTIFICATION_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_NOTIFICATION_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMsg: '',
      };
    case GET_NOTIFICATION_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default getNotificationListReducer;
