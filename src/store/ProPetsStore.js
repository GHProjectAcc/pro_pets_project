import {applyMiddleware, createStore} from "redux";
import userReducer from "../reducer/userReducer";
import thunk from "redux-thunk";
import {rootReducer} from "../reducer";

const initialState = {
    user: {
        avatarAuthor: require('../images/home_img/logoKuzya.png'),
        name: 'Tom Hardi',
        time: '2h',
        posts: [],
        display: false,
        favorites: false,
        email: 'someEmail@gmail.com',
        fblink: 'https://www.facebook.com/profile.php?id=100007757115574',
        phone: '056-750-25-43'
    },
    displayChange: {
        display: false
    },

};

export const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

