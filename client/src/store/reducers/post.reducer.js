import { postConstants } from '../constants';

export function post(state={}, action) {
  switch (action.type) {
    case postConstants.REGISTER_REQUEST:
      return {
        posting: true,
        post: action.payload.data
      };
    case postConstants.REGISTER_SUCCESS:
      return {
        posted: true,
        post: action.payload.data
      };
    case postConstants.REGISTER_FAILURE:
      return {};
    case postConstants.GET_REQUEST:
    case postConstants.LIST_REQUEST:
      return {
        loading: true,
      };
    case postConstants.GET_SUCCESS:
    case postConstants.LIST_SUCCESS:
      return {
        loaded: true,
        post: action.payload.data
      };
    case postConstants.GET_FAILURE:
    case postConstants.LIST_FAILURE:
      return {};
    default: 
      return state;
  }
}