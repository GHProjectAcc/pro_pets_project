import {UPDATE_NAME, UPDATE_PHONE} from "../actions/EditUserActions";


function editProfileReducer(user = {}, action) {
    switch (action.type) {
        case UPDATE_PHONE:
            return {...user, phone: action.payload};
        case UPDATE_NAME:
            return {...user, name: action.payload};

        default:
            return user;
    }
}

export default editProfileReducer;