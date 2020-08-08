import {POST_LOST_FEED} from "../actions/PostLostActions";

function postLostReducer(postsLost = [], action) {
    switch (action.type) {
        case POST_LOST_FEED:
            return {...postsLost, postsLost: action.payload};
        default:
            return postsLost;
    }
}

export default postLostReducer;