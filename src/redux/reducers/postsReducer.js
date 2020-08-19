import {FAVORITES_POSTS} from "../actions/FavoritesPostsActions";

function postsReducer(state = [], action) {
    switch (action.type) {
        case FAVORITES_POSTS:
            return {...state.posts, posts: action.payload};
        default:
            return state;
    }
}

export default postsReducer;