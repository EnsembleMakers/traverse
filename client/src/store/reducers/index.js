import { combineReducers } from 'redux';
import { alert } from './alert.reducer';
import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { registration } from './registration.reducer';
import { post } from './post.reducer';
import { portion } from './portion.reducer';

export default combineReducers({
  users,
  authentication,
  registration,
  alert,
  post,
  portion
});