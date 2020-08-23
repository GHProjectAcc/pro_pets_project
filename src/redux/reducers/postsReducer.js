import {FAVORITES_POSTS} from "../actions/FavoritesPostsActions";
import {HOME_POSTS} from "../actions/HomePostsActions";

function postsReducer(state = {}, action) {
    switch (action.type) {
        case FAVORITES_POSTS:
            return {...state.postsFavorites, posts: action.payload};
        case HOME_POSTS:
            return {...state.postsHome, posts: action.payload};
        default:
            return state;
    }
}

export default postsReducer;