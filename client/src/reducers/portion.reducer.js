import { portionsConstants } from '../constants';

export function portion(state={}, action) {
  switch (action.type) {
    case portionsConstants.REGISTER_REQUEST:
    case portionsConstants.REGISTER_BY_ID_REQUEST:
      return {
        portioning: true,
        portion: { post_id: action.payload.data }
      };
    case portionsConstants.REGISTER_SUCCESS:
    case portionsConstants.REGISTER_BY_ID_SUCCESS:
      return {
        portioned: true,
        portion: action.payload.data
      };
    case portionsConstants.REGISTER_FAILURE:
    case portionsConstants.REGISTER_BY_ID_FAILURE:
      return {};
    case portionsConstants.GET_REQUEST:
    case portionsConstants.LIST_REQUEST:
      return {
        loading: true,
      };
    case portionsConstants.GET_SUCCESS:
      return {
        loaded: true,
        portion: action.payload.data
      };
    case portionsConstants.LIST_SUCCESS:
      return {
        loaded: true,
        portions: action.payload.data
      };
    case portionsConstants.GET_FAILURE:
    case portionsConstants.LIST_FAILURE:
      return {};
    default: 
      return state;
  }
}