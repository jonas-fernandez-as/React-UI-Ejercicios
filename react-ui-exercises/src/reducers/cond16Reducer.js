import { TYPES } from "../actions/cond16Actions";

export const InitialState = {
  operation: "",
  order: [],
  same: "",
};

export function cond16Reducer(state, action) {
  //console.log(state)
  
  switch (action.type) {
    case TYPES.SAME_NUMBERS:
      
      if (
        action.payload.n1 === action.payload.n2 &&
        action.payload.n1 === action.payload.n3
      ) {
        
        state.same = "The numbers are the same";
      }

      if (
        action.payload.n1 !== action.payload.n2 ||
        action.payload.n1 !== action.payload.n3
      ) {
        
        state.same= "The numbers are diferent"}
      
        console.log(state)    
        
      

    case TYPES.ORGANIZE:
      let orden = [];
      let n1 = action.payload.n1;
      let n2 = action.payload.n2;
      let n3 = action.payload.n3;
      

      if (n1===n2 && n1<n3){
        orden.push(n1,n2,n3)
        if(n1===n2 && n1>n3){
          orden.push(n3,n2,n1)
        }
      }

      if (n1===n3 && n1<n2){
        orden.push(n1,n3,n2)
        if(n1===n3 && n1>n2){
          orden.push(n2,n1,n3)
        }
      }

      if (n2===n3 && n2<n1){
        orden.push(n2,n3,n1)
        if(n2===n3 && n2>n1){
          orden.push(n1,n2,n3)
        }
      }

      
       
       if(n1===n2 && n2===n3){
        orden.push(n1);
        orden.push(n2);
        orden.push(n3);
       }

      if (n1 < n2 && n1 < n3) {
        orden.push(n1);
        if (n2 < n3) {
          orden.push(n2);
          orden.push(n3);
        } else {
          orden.push(n3);
          orden.push(n2);
        }
      }

      if (n2 < n1 && n2 < n3) {
        orden.push(n2);
        if (n1 < n3) {
          orden.push(n1);
          orden.push(n3);
        } else {
          orden.push(n3);
          orden.push(n1);
        }
      }

      if (n3 < n1 && n3 < n2) {
        orden.push(n3);
        if (n2 < n1) {
          orden.push(n2);
          orden.push(n1);
        } else {
          orden.push(n1);
          orden.push(n2);
        }
      }

        state.order= `${orden[0]},${orden[1]},${orden[2]}`


       
      
      

    case TYPES.OPERATION:
      let addition = action.payload.n1 + action.payload.n2;
      let multiplication = action.payload.n2 * action.payload.n3;
      if (addition > multiplication)
        
          state.operation= `Addition of first and second number (${addition}) are major than multiplication of second and third number (${multiplication})`
        
      else {
        
         state.operation= `Addition of first and second number (${addition}) are minor than multiplication of second and third number (${multiplication})`
        
      }

      return state
    
    default:
      return state;
  }
   
}
