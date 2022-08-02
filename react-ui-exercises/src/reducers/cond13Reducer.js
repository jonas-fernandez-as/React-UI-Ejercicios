import { TYPES } from "../actions/cond13Actions";


export const InitialState ={
 average:0, 
}

export function cond13Reducer (state,action){
 switch (action.type) {
  case TYPES.DIRECT_APROBATION:
   return {average: "Direct aprobation"}
   case TYPES.TAKE_FINAL_EXAM:
    return {average: "Take final exam"}
    case TYPES.REPROBATE_MUST_APPEAL:
     return {average: "Reprobate, must appeal"} 
   case TYPES.MAJOR_10:
     return {average:"Numbers major than 10 are not permitted"} 
   case TYPES.MINOR_0:
      return {average:"Negative numbers are not permitted" }
    
 
  default:
   return state
 }
}
