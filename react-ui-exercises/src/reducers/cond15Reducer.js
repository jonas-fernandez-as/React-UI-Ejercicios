import { TYPES } from "../actions/cond15Actions";

export const InitialState={
 result:""
}

export function cond15Reducer (state,action) {
 switch (action.type) {
  case TYPES.RAM_8:
    //console.log(action.payload.mod,action.payload.pays)
    if(action.payload.mod === "i5"){
      if(action.payload.pays==="cash"){
      return{result:` Total: U$D${800-800*0.10} `}
      }else{
        return{result:` Total: U$D${800} `}
      }
    }
    if(action.payload.mod === "i7"){
      if(action.payload.pays==="cash"){
        return{result:` Total: U$D${900-900*0.10}`}
        }else{
          return{result:` Total: U$D${900}`}
        }
    }
    if(action.payload.mod === "i9"){
      if(action.payload.pays==="cash"){
        
        return{result:` Total: U$D${1200-1200*0.10}`}
        }else{
          return{result:` Total: U$D${1200}`}
        }
    }
   
   case TYPES.RAM_16:
    if(action.payload.mod === "i5"){
      if(action.payload.pays==="cash"){
        
        return{result:` Total: U$D${900-900*0.10}`}
        }else{
          return{result:` Total: U$D${900}`}
        }   
      }
    if(action.payload.mod === "i7"){

      if(action.payload.pays==="cash"){
        
        return{result:` Total: U$D${1000-1000*0.10}`}
        }else{
          return{result:` Total: U$D${1000}`}
        }
    }
    if(action.payload.mod === "i9"){
      if(action.payload.pays==="cash"){
        
        return{result:` Total: U$D${1400-1400*0.10}`}
        }else{
          return{result:` Total: U$D${1400}`}
        }
    }
   
  
   case TYPES.RAM_32:
    if(action.payload.mod === "i5"){
      if(action.payload.pays==="cash"){
        
        return{result:` Total: U$D${1000-1000*0.10}`}
        }else{
          return{result:` Total: U$D${1000}`}
        }
    }
    if(action.payload.mod === "i7"){

      if(action.payload.pays==="cash"){
        
        return{result:` Total: U$D${1400-1400*0.10}`}
        }else{
          return{result:` Total: U$D${1400}`}
        }
    }
    if(action.payload.mod === "i9"){
      if(action.payload.pays==="cash"){
        
        return{result:` Total: U$D${2000-2000*0.10}`}
        }else{
          return{result:` Total: U$D${2000}`}
        }
    }
 
  default:
   return state
 }
}