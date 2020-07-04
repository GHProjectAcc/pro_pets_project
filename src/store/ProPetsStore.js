import {applyMiddleware, createStore} from "redux";
import userAuthorizationReducer from "../reducer/userAuthorizationReducer";
import thunk from "redux-thunk";
import {rootReducer} from "../reducer";

const initialState = {
    user: {
        avatarAuthor: require('../images/home_img/logoKuzya.png'),
        time: '2h',
        posts: [],
        display: false,
        favorites: false
    },
    displayChange: {
        display: false
    }
};

export const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

