import axios from "axios";
import { Dispatch } from "react";
import {
  GET_CHATLIST_FAILURE,
  GET_CHATLIST_REQUEST,
  GET_CHATLIST_SUCCESS,
} from "../constants/chatList.constant";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const ACCESS_TOKEN = process.env.REACT_APP_AUTH_TOKEN;

const getChatListRequest = () => {
  return {
    type: GET_CHATLIST_REQUEST,
  };
};

const getChatListSuccess = (chatListData: any) => {
  return {
    type: GET_CHATLIST_SUCCESS,
    payload: chatListData,
  };
};

const getChatListFailure = (chatListError: any) => {
  return {
    type: GET_CHATLIST_FAILURE,
    payload: chatListError,
  };
};

export const getChatList: any = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch(getChatListRequest());
    return axios
      .get(`${BASE_URL}/account/chatlist`, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      })
      .then((response) => dispatch(getChatListSuccess(response.data)))
      .catch((error) => dispatch(getChatListFailure(error)));
  };
};
