import {combineReducers} from "redux";
import userReducer from './userReducer'
import displayChangeReducer from "./displayChangeReducer";
import postsReducer from "./postsReducer";
import postLostReducer from "./postLostReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    posts: postsReducer,
    postsLost: postLostReducer,
    displayChange: displayChangeReducer
});