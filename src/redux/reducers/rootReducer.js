import { A, B, C } from "../constant";
import initialState from "../initialData/initialState";




let rootReducer = (oldState = initialState, action) => {

    let newState = oldState;
    //console.log(newState)
  
    switch (action.type) {
      case A:
       return {
        ...newState,
        name:'kiran'
       }
        break;
      case B:
       return newState
        break;
     
  
        default:
  
    }
  
    return newState
  }


  export default rootReducer ;