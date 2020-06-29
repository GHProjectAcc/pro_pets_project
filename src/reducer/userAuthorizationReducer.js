import {LOGIN_USER, REGISTRATION_USER, LOGOUT_USER} from "../actions/UserAuthorizationActions";

export default function userAuthorizationReducer(user = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {...user, user: action.payload};
        case REGISTRATION_USER:
            return {...user, user: action.payload};
        case LOGOUT_USER:
            return {...user, user: {}};
        default:
            return user;
    }
}