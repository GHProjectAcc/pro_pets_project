import {LOGIN_USER, REGISTRATION_USER, LOGOUT_USER} from "../actions/UserAuthorizationActions";

function userAuthorizationReducer(state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, user: action.payload};
        case REGISTRATION_USER:
            return {...state, user: action.payload};
        case LOGOUT_USER:
            return {...state, user: {}};
        default:
            return state;
    }
}

export default userAuthorizationReducer;