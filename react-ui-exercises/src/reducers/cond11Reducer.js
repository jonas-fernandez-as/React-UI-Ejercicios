import { TYPES } from "../actions/cond11Actions";

export const InitialState = {
  result: 0,
};

export function cond11Reducer(state, action) {
  switch (action.type) {
    case TYPES.SUBSTRACTION:
      
      return {
        result: parseInt(action.payload.n1) - parseInt(action.payload.n2),
        
      };

    case TYPES.ADDITION:
      return {
        result: parseInt(action.payload.n1) + parseInt(action.payload.n2),
      };

    case TYPES.MULTIPLICATION:
      return {
        result: parseInt(action.payload.n1) * parseInt(action.payload.n2),
      };

    default:
      return state;
  }
}
