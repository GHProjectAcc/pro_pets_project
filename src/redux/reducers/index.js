import {combineReducers} from "redux";
import userReducer from './userReducer'
import displayChangeReducer from "./displayChangeReducer";
import postsFavoritesReducer from "./postsFavoritesReducer";
import postLostReducer from "./postLostReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    postsFavorites: postsFavoritesReducer,
    postsLost: postLostReducer,
    displayChange: displayChangeReducer
});