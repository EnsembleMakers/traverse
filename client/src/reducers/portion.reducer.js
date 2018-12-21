import { portionConstants } from '../constants';

export function portion(state={}, action) {
  switch (action.type) {
    case portionConstants.REGISTER_REQUEST:
    case portionConstants.REGISTER_BY_ID_REQUEST:
      return {
        portioning: true,
        portion: { post_id: action.payload.data }
      };
    case portionConstants.REGISTER_SUCCESS:
    case portionConstants.REGISTER_BY_ID_SUCCESS:
      return {
        portioned: true,
        portion: action.payload.data
      };
    case portionConstants.REGISTER_FAILURE:
    case portionConstants.REGISTER_BY_ID_FAILURE:
      return {};
    case portionConstants.GET_REQUEST:
    case portionConstants.LIST_REQUEST:
      return {
        loading: true,
      };
    case portionConstants.GET_SUCCESS:
      return {
        loaded: true,
        portion: action.payload.data
      };
    case portionConstants.LIST_SUCCESS:
      return {
        loaded: true,
        portions: action.payload.data
      };
    case portionConstants.GET_FAILURE:
    case portionConstants.LIST_FAILURE:
      return {};
    default: 
      return state;
  }
}