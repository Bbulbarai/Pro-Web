/* eslint-disable consistent-return */
import _ from 'lodash';
import withQuery from 'with-query';
import { message } from "antd";
import {API_URL} from "../../package.json";

const request = ({
  url, method, body, isfiles,
}) => {
  if (method === 'GET') {

    return fetch(withQuery(API_URL + url, body), {
      method: 'GET',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': '*',
      },
    }).then((response) => {
      if (response.status === 401 || response.status === 403) {
        localStorage.clear();
      }
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }
  if (isfiles) {
    const request = new Request(API_URL + url, {
      method,
      headers: new Headers({  }),
      body,
    });
    return fetch(request).then((response) => {
      if (!response.ok) { throw new Error(response.statusText); }
      return response.json();
    });
  }
  return fetch(API_URL + url, {
    method,
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};

const asyncFn = ({
  body, url, method = 'GET', model, name, isfiles = false,
}) => async (dispatch) => {
  const payload = {};
  dispatch({
    type: model.request,
    payload,
    name,
  });
  try {
    if (model.request === 'REQUEST_LOGOUT') {
      dispatch({
        type: model.response,
        name,
      });
    } else {
      const data = await request({
        url, method, body, isfiles,
      });

      if (!data) {
        throw new Error('no data provided');
      }
      return dispatch({
        type: model.response,
        payload: data,
        name,
      });
    }
  } catch (error) {
    dispatch({
      type: model.error,
      message: error.message,
      name,
    });
  }
};

export { request, asyncFn };
