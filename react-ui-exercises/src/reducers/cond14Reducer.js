import { TYPES } from "../actions/cond14Actions";

export const InitialState={
 result:""
}

export function cond14Reducer (state,action) {
 switch (action.type) {
  case TYPES.EQUILATERAL_TRIANGLE:
   return{result:"Is equilateral triangle"}
   case TYPES.ISOSCELES_TRIANGLE:
   return{result:"Is isosceles triangle"}
  
   case TYPES.SCALENE_TRIANGLE:
   return{result:"Is scalene triangle"}
 
  default:
   return state
 }
}