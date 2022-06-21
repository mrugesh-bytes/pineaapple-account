import { NOTIFY_VISITOR_FAILURE, NOTIFY_VISITOR_REQUEST, NOTIFY_VISITOR_SUCCESS } from '../constants/notifyVisitor.constant';

const initialState = {
  loading: false,
  data: [],
  errorMsg: '',
};

const notifyVisitorReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case NOTIFY_VISITOR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NOTIFY_VISITOR_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMsg: '',
      };
    case NOTIFY_VISITOR_FAILURE:
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

export default notifyVisitorReducer;
