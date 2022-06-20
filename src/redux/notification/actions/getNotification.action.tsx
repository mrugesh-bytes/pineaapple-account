import axios from 'axios';
import { Dispatch } from 'react';
import { GET_NOTIFICATION_LIST_FAILURE, GET_NOTIFICATION_LIST_REQUEST, GET_NOTIFICATION_LIST_SUCCESS } from '../constants/getNotification.constant';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const ACCESS_TOKEN = process.env.REACT_APP_AUTH_TOKEN;

const getNotificationListRequest = () => {
  return {
    type: GET_NOTIFICATION_LIST_REQUEST,
  };
};

const getNotificationListSuccess = (notificationList: any) => {
  return {
    type: GET_NOTIFICATION_LIST_SUCCESS,
    payload: notificationList,
  };
};

const getNotificationListFailure = (errorMsg: any) => {
  return {
    type: GET_NOTIFICATION_LIST_FAILURE,
    payload: errorMsg,
  };
};

export const getNotificationList: any = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch(getNotificationListRequest());
    axios
      .get(`${BASE_URL}/notify/messages-template`, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      })
      .then((response) => dispatch(getNotificationListSuccess(response.data)))
      .catch((error) => dispatch(getNotificationListFailure(error)));
  };
};
