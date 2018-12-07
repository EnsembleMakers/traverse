import { portionConstants } from '../constants';
import { portionService } from '../services';
import { alertActions } from './';
import { history } from '../helpers';

export const portionActions = {
  register,
  getPortion,
  list,
  update,
  delete: _delete
};

function register(portion) {
  return dispatch => {
    dispatch(request(post_id.title));
 
    portionService.register(post)
      .then(
        user => { 
          dispatch(success(user));
          history.push('/');
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request(title) { return { type: portionConstants.REGISTER_REQUEST, payload: title } }
  function success(portion) { return { type: portionConstants.REGISTER_SUCCESS, payload: portion } }
  function failure(error) { return { type: portionConstants.REGISTER_FAILURE, payload: error } }
}