import { combineReducers } from 'redux';

const usersReducer = (action) => {
  return [
    { email: 'lsupertopl@gmail.com', password: '1234', firstName: 'Byoungjun', lastName: 'Kim'},
    { email: 'admin@gmail.com', password: '1234', firstName: 'Admin', lastName: 'Admin'},
  ];
};

const loggedInUserReducer = (loggedInUser=null, action) => {
  if (action.type === 'USER_LOGGEDIN') {
    return action.payload;
  } else {
    return loggedInUser;
  }
};

export default combineReducers({
  users: usersReducer,
  loggedInUser: loggedInUserReducer
});