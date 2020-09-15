import {createStore} from 'redux'
//initialState
const initialState ={
  count:0,
  id:7,
}


//Action creator 

export const Increment = function(){

  return {
    type:"Increment"
  }
}

export const Decrement = function(){

  return {
    type:"Decrement"
  }
}

// dispatch calls action creator collect the object(describing action)and then 
//call reducer and pass to it 


//Reducer 

const reducer = (state= initialState ,action )=> {

  switch(action.type){
    case "Increment" : return {count : state.count+1};
    case "Decrement" : return {count : state.count-1};
    default : return state;
  }

}

const store = createStore(reducer) ;//store will hold state and reducer 

export default store 


//subscribe  
//dispatch an action 
//giving  updated state to component // mapStateToProps