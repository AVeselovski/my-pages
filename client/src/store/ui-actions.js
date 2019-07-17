// core
import axios from 'axios';
// utils
import { ROOT_URL, SET_PROCESSING, SET_UI, SET_ERROR } from '../settings/constants';

export const setProcessing = value => ({
  type: SET_PROCESSING,
  payload: value,
});

export const setUi = ui => ({
  type: SET_UI,
  payload: ui,
});

export const setError = error => ({
  type: SET_ERROR,
  payload: error,
});

// async
export const getUi = () => {
  return async dispatch => {
    dispatch(setProcessing(true));

    axios(`${ROOT_URL}/ui`, {})
      .then(response => {
        dispatch(setUi(response.data));
      })
      .catch(error => {
        dispatch(setError(error));
      });
  };
};
