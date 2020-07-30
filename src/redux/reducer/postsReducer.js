import {POST_FEED} from "../actions/PostFeedActions";

function postsReducer(posts = {}, action) {
    switch (action.type) {
        case POST_FEED:
            return {...posts, posts: action.payload};
        default:
            return posts;
    }
}

export default postsReducer;