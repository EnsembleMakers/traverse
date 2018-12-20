import { portionConstants } from '../constants';
import { portionService } from '../services';
import { alertActions } from './';
import { history } from '../helpers';

export const portionActions = {
  register,
  registerById,
  getPortion,
  getPortionList,
  update,
  delete: _delete
};

function register(portion) {
  return dispatch => {
    dispatch(request(portion.post_id));

    portionService.register(portion)
      .then(
        data => { 
          dispatch(success(data));
          history.push(`/home/posts/portion`);
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request(id) { return { type: portionConstants.REGISTER_REQUEST, payload: id } }
  function success(portion) { return { type: portionConstants.REGISTER_SUCCESS, payload: portion } }
  function failure(error) { return { type: portionConstants.REGISTER_FAILURE, payload: error } }
}

function registerById(id, portion) {
  return dispatch => {
    dispatch(request(id));

    portionService.registerById(id, portion)
      .then(
        data => { 
          dispatch(success(data));
          history.push(`/home/posts/portion`);
          dispatch(alertActions.success('registerById is successful'));
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request(id) { return { type: portionConstants.REGISTER_BY_ID_REQUEST, payload: id } }
  function success(portion) { return { type: portionConstants.REGISTER_BY_ID_SUCCESS, payload: portion } }
  function failure(error) { return { type: portionConstants.REGISTER_BY_ID_FAILURE, payload: error } }
}

function getPortion(id) {
  return dispatch => {
    dispatch(request(id));

    portionService.getPortion(id)
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

  function request(id) { return { type: portionConstants.LIST_REQUEST, payload: id } }
  function success(portion) { return { type: portionConstants.LIST_SUCCESS, payload: portion } }
  function failure(error) { return { type: portionConstants.LIST_FAILURE, payload: error } }
}

function getPortionList() {
  return dispatch => {
    dispatch(request());

    portionService.getPortionList()
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

  function request() { return { type: portionConstants.LIST_REQUEST } }
  function success(portions) { return { type: portionConstants.LIST_SUCCESS, payload: portions } }
  function failure(error) { return { type: portionConstants.LIST_FAILURE, payload: error } }
}

function update(portion) {
  return dispatch => {
    dispatch(request(portion._id));

    portionService.update(portion)
      .then(
        data => { 
          dispatch(success(data));
          alertActions.success('PortionUpdate is successful')
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request(id) { return { type: portionConstants.UPDATE_REQUEST, payload: id } }
  function success(portion) { return { type: portionConstants.UPDATE_SUCCESS, payload: portion } }
  function failure(error) { return { type: portionConstants.UPDATE_FAILURE, payload: error } }
}

function _delete(id) {
  return dispatch => {
    dispatch(request(id));

    portionService._delete(id)
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

  function request() { return { type: portionConstants.DELETE_REQUEST } }
  function success(id) { return { type: portionConstants.DELETE_SUCCESS, payload: id } }
  function failure(id, error) { return { type: portionConstants.DELETE_FAILURE, payload: { id, error } } }
}