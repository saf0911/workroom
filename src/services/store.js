import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddlware from 'redux-thunk';
import reducer from '../reducer';


const initialState = {};



export const initStore = () => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddlware)));
};
