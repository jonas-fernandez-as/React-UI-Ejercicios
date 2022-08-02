import { TYPES } from "../actions/cond12Actions";

export const InitialState = {
  result: 0,
};

export function cond12Reducer(state, action) {
  switch (action.type) {
    case TYPES.NO_DISCOUNT:
      return { result: action.payload.n * 15 };

    case TYPES.DISCOUNT_10:
      return {
        result: action.payload.n * 15 - action.payload.n * 15 * 0.1,
      };

    case TYPES.DISCOUNT_15:
      return {
        result: action.payload.n * 15 - action.payload.n * 15 * 0.15,
      };

    case TYPES.DISCOUNT_25:
      return {
        result: action.payload.n * 15 - action.payload.n * 15 * 0.25,
      };

    default:
      return state;
  }
}
