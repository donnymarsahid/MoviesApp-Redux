import { ActionTypes } from '../actionTypes/ActionTypes';

export const getMovies = (data) => {
  return {
    type: ActionTypes.GET_MOVIES,
    payload: data,
  };
};

export const valueSearch = (value) => {
  return {
    type: ActionTypes.VALUE_SEARCH,
    payload: value,
  };
};
