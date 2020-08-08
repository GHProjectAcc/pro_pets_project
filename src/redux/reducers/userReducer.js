import {LOGIN_USER, REGISTRATION_USER, LOGOUT_USER} from "../actions/UserAuthorizationActions";
import {UPDATE_NAME, UPDATE_PHONE} from "../actions/EditUserActions";

function userReducer(user = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {...user, user: action.payload};
        case REGISTRATION_USER:
            return {...user, user: action.payload};
        case LOGOUT_USER:
            return {...user, user: {}};
        case UPDATE_PHONE:
            return {...user, phone: action.payload};
        case UPDATE_NAME:
            return {...user, name: action.payload};
        default:
            return user;
    }
}

export default userReducer;