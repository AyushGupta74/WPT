import {configureStore} from "@reduxjs/toolkit"


function reducerFunc(state={counter:100,arr:["Pune","Nagpur"]},action)
{
     if(action.type=="PUSH")
     {
        let x = action.data
        let arr2 = [...state.arr]
        arr2.push(x)
        return {...state,arr:arr2}
     }
      if(action.type == "INCR")
      {
          let x = state.counter;
          x++
          return {...state,counter:x}
      }
      if(action.type == "DECR")
      {
        let x = state.counter
        x--
        return {...state,counter:x}

      }

      return state
}

let mystore =configureStore({reducer:reducerFunc})
export default mystore;


