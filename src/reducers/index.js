import { combineReducers } from 'redux';
import { alert } from './alert.reducer';
import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { registration } from './registration.reducer';

export default combineReducers({
  users: users,
  authentication: authentication,
  registration: registration,
  alert: alert,
});