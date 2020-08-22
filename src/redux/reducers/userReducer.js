import {REGISTRATION_USER, LOGOUT_USER} from "../actions/UserAuthorizationActions";
import {UPDATE_NAME, UPDATE_PHONE} from "../actions/EditUserActions";
import {LOGIN_USER} from "../actions/UserLoginActions";
import {USER_INFO} from "../actions/UserInformationActions";

function userReducer(state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {...state.user, user: action.payload};
        case REGISTRATION_USER:
            return {...state, user: action.payload};
        case LOGOUT_USER:
            return {...state, user: {}};
        case USER_INFO:
            return {...state.user, user: action.payload};
        case UPDATE_PHONE:
            return {...state, phone: action.payload};
        case UPDATE_NAME:
            return {...state, name: action.payload};
        default:
            return state;
    }
}

export default userReducer;