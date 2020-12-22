import {
  GET_FILMS,
  GET_FILMS_SUCCESS,
  GET_FILMS_ERROR,
} from '../actions/films';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILMS:
      return { ...state, ...{ data: null, error: null, loading: true } };
    case GET_FILMS_SUCCESS:
      return {
        ...state,
        ...{ data: action.data, error: null, loading: false },
      };
    case GET_FILMS_ERROR:
      return { ...state, ...{ data: null, error: action.error, loading: false } };
    default:
      return state;
  }
};

export default reducer;