const GET_FILMS = 'GET_FILMS';
const GET_FILMS_SUCCESS = 'GET_FILMS_SUCCESS';
const GET_FILMS_ERROR = 'GET_FILMS_ERROR';

function getFilms(urls) {
  return async dispatch => {
    dispatch({ type: GET_FILMS });
    try {
      const results = await Promise.all(urls.map(url => fetch(url)));
      const data = await Promise.all(results.map(result => result.json()));

      dispatch(dispatch({ type: GET_FILMS_SUCCESS, data }));
    } catch (error) {
      dispatch(dispatch({ type: GET_FILMS_ERROR, error }));
    }
  };
}

export {
  GET_FILMS,
  GET_FILMS_SUCCESS,
  GET_FILMS_ERROR,
  getFilms,
};