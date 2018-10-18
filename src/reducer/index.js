import {combineReducers} from 'redux';


function users(state = [], action) {
  if (action.type === 'USERS_LOADED') {
    return action.value;
  }
  return state;
}

function user(state = {}, action) {
  if (action.type === 'GET_USER_DONE') {
    return action.value;
  }
  return state;
}


const rootReducer = combineReducers({
  users,
  user,

});
export default rootReducer;
