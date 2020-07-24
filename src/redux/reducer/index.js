import {combineReducers} from "redux";
import userReducer from './userReducer'
import displayChangeReducer from "./displayChangeReducer";
import postReducer from "./postReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    displayChange: displayChangeReducer,
    post: postReducer
});