import { combineReducers } from 'redux';

import people from './people';
import films from './films';

export default combineReducers({
  people,
  films
})