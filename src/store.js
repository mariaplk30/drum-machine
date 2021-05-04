import { createStore} from 'redux';

const nameReducer = (state, action) =>{
  switch(action.type){
    case "NAME":
      return {name: action.payload}
    default:
      return state;
    }
}

const store = createStore(nameReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store