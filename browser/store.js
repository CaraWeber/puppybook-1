import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { loadPuppies, LOAD_PUPPIES, GET_PUPPY } from './action-creators';

const initialState = { allPuppies: [] };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type){
//     case LOAD_PUPPIES: return Object.assign({}, state, {allPuppies: action.allPuppies}) 
//     break;
//     case GET_PUPPY: return Object.assign({}, state, {puppy: action.puppy})    
//     default: return state;
//   }
// }

const PuppyReducer = (state = {}, action) => {
  switch (action.type){
    case GET_PUPPY: return action.puppy;    
    default: return state;
  }
}


const AllPuppyReducer = (state = [], action) => {
  switch (action.type){
    case LOAD_PUPPIES: return action.allPuppies;
    default: return state;
  }
}
  
export default createStore(
  combineReducers({puppy: PuppyReducer, allPuppies: AllPuppyReducer}),
  applyMiddleware(
    createLogger(), 
    thunkMiddleware
    )
  );