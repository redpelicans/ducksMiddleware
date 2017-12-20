import { combineReducers } from 'redux';
import people from '../ducks/people';
import alert from '../ducks/alert';

export default combineReducers({
  people,
  alert,
});
