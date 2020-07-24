import {POST_FEED} from "../actions/PostFeedActions";

function postReducer(post = {}, action) {
    switch (action.type) {
        case POST_FEED:
            return {...post, post: action.payload};
        default:
            return post;
    }
}

export default postReducer;