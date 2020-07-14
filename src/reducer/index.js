import {combineReducers} from "redux";
import userReducer from './userReducer'
import displayChangeReducer from "./displayChangeReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    displayChange: displayChangeReducer,


});