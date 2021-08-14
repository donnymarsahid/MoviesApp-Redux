import { ActionTypes } from '../actionTypes/ActionTypes';

const globalState = {
  movies: [],
  value: '',
};

export const rootReducer = (state = globalState, { type, payload }) => {
  if (type === ActionTypes.GET_MOVIES) {
    return {
      ...state,
      movies: payload,
    };
  }
  if (type === ActionTypes.VALUE_SEARCH) {
    return {
      ...state,
      value: payload,
    };
  }
  return state;
};
