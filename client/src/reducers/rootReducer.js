/*
 src/reducers/rootReducer.js
*/
import {combineReducers} from 'redux';


import userReducer from "./userReducer";
import appReducer from "./appReducer";

export default combineReducers({
    appR: appReducer,
    userR: userReducer,
});