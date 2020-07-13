import {combineReducers} from "redux";
import userAuthorizationReducer from '../reducer/userAuthorizationReducer'
import displayChangeReducer from "./displayChangeReducer";


export const rootReducer = combineReducers({
    user: userAuthorizationReducer,
    displayChange: displayChangeReducer,


});