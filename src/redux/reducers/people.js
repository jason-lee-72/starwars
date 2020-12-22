import {
  GET_PEOPLE,
  GET_PEOPLE_SUCCESS,
  GET_PEOPLE_ERROR,
  SET_SELECTED_PERSON
} from '../actions/people';

const initialState = {
  selectedPerson: null,
  data: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PEOPLE:
      return { ...state, ...{ error: null, loading: true } };
    case GET_PEOPLE_SUCCESS:
      return {
        ...state,
        ...{ data: action.data, error: null, loading: false },
      };
    case GET_PEOPLE_ERROR:
      return { ...state, ...{ data: null, error: action.error, loading: false } };
    case SET_SELECTED_PERSON:
      return { ...state, selectedPerson: action.data };
    default:
      return state;
  }
};

export default reducer;