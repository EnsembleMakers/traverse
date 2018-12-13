import { postConstants } from '../constants';
import { postService, userService, portionService } from '../services';
import { alertActions } from './';
import { history } from '../helpers';

export const postActions = {
  register,
  getPost,
  getPostList,
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
          history.push('/home/posts');
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

function getPost(id) {
  return dispatch => {
    dispatch(request());

    postService.getPost(id)
      .then(
        data => { 
          dispatch(success(data));
          history.push(`/home/posts/${id}`);
          alertActions.success('getPost() successful')
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request() { return { type: postConstants.GET_REQUEST } }
  function success(post) { return { type: postConstants.GET_SUCCESS, payload: post } }
  function failure(error) { return { type: postConstants.GET_FAILURE, payload: error } }
}

function getPostList() {
  return dispatch => {
    dispatch(request());

    postService.list()
      .then(
        data => { 
          dispatch(success(data));
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request() { return { type: postConstants.LIST_REQUEST } }
  function success(posts) { return { type: postConstants.LIST_SUCCESS, payload: posts } }
  function failure(error) { return { type: postConstants.LIST_FAILURE, payload: error } }
}

function update(post) {
  return dispatch => {
    dispatch(request(post.title));

    postService.update(post)
      .then(
        data => { 
          dispatch(success(data));
          alertActions.success('PostUpdate successful')
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request() { return { type: postConstants.UPDATE_REQUEST } }
  function success(post) { return { type: postConstants.UPDATE_SUCCESS, payload: post } }
  function failure(error) { return { type: postConstants.UPDATE_FAILURE, payload: error } }
}

function _delete(id) {
  return dispatch => {
    dispatch(request(id));

    postService._delete(id)
      .then(
        data => { 
          dispatch(success(data));
        },
        error => {
          dispatch(failure(id, error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request() { return { type: postConstants.DELETE_REQUEST } }
  function success(id) { return { type: postConstants.DELETE_SUCCESS, payload: id } }
  function failure(id, error) { return { type: postConstants.DELETE_FAILURE, payload: { id, error } } }
}