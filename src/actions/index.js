// Action Creator : 함수
// Action : object

export const LoggedInUser = (user) => {
  return {
    type: 'USER_LOGGEDIN',
    payload: user
  };
};