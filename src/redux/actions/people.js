const SET_SELECTED_PERSON = 'SET_SELECTED_PERSON';
const GET_PEOPLE = 'GET_PEOPLE';
const GET_PEOPLE_SUCCESS = 'GET_PEOPLE_SUCCESS';
const GET_PEOPLE_ERROR = 'GET_PEOPLE_ERROR';

const SWAPI_PEOPLE_ENDPOINT = 'https://swapi.dev/api/people/';

function getPeople(url = SWAPI_PEOPLE_ENDPOINT) {
  return async dispatch => {
    dispatch({ type: GET_PEOPLE });
    try {
      const result = await fetch(url);
      const data = await result.json();
      dispatch({ type: GET_PEOPLE_SUCCESS, data });
    } catch (error) {
      dispatch({ type: GET_PEOPLE_ERROR, error });
    }
  };
}

function setSelectedPerson(person) {
  return {
    type: SET_SELECTED_PERSON,
    data: person
  }
}

export {
  GET_PEOPLE,
  GET_PEOPLE_ERROR,
  GET_PEOPLE_SUCCESS,
  SET_SELECTED_PERSON,
  getPeople,
  setSelectedPerson
};