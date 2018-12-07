import { postConstants } from '../constants';
import { postService, userService, portionService } from '../services';
import { alertActions } from './';
import { history } from '../helpers';

export const postActions = {
  register,
  getPost,
  list,
  update,
  delete: _delete
};

function register(post) {
  return dispatch => {
    dispatch(request(post.title));

    postService.register(post)
      .then(
        data => { 
          dispatch(success(data));
          history.push('/');
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request(title) { return { type: postConstants.REGISTER_REQUEST, payload: title } }
  function success(post) { return { type: postConstants.REGISTER_SUCCESS, payload: post } }
  function failure(error) { return { type: postConstants.REGISTER_FAILURE, payload: error } }
}

function getPost() {
  return dispatch => {
    dispatch(request(post.title));

    postService.register(post)
      .then(
        data => { 
          dispatch(success(data));
          history.push('/');
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request(title) { return { type: postConstants.REGISTER_REQUEST, payload: title } }
  function success(post) { return { type: postConstants.REGISTER_SUCCESS, payload: post } }
  function failure(error) { return { type: postConstants.REGISTER_FAILURE, payload: error } }
}

function register(post) {
  return dispatch => {
    dispatch(request(post.title));

    postService.register(post)
      .then(
        data => { 
          dispatch(success(data));
          history.push('/');
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request(title) { return { type: postConstants.REGISTER_REQUEST, payload: title } }
  function success(post) { return { type: postConstants.REGISTER_SUCCESS, payload: post } }
  function failure(error) { return { type: postConstants.REGISTER_FAILURE, payload: error } }
}