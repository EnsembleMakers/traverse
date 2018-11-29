import { combineReducers } from 'redux';
import { alert } from './alert.reducer';
import { authentication } from './authentication.reducer';
import { users } from './users.reducer';

export default combineReducers({
  users: users,
  auth: authentication,
  alert: alert,
});