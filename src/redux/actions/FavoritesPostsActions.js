import axios from "axios";
import history from "../../history";

export const FAVORITES_POSTS = 'FAVORITES_POSTS';

export const getFavoritesPosts = posts => ({
    type: FAVORITES_POSTS,
    payload: posts
});

export const getFavoritesPostsPage = (pageNumber) => {
    return dispatch => {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            axios({
                url: `https://propets-gateway-service.herokuapp.com/message/v1/post/favorites/?page=${pageNumber - 1}`,
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(function (response) {
                console.log(response.data);
                dispatch(getFavoritesPosts(response.data));
                history.push(`/favorites/${pageNumber}`)
            }).catch(function (err) {
                console.log('fuck');
                console.log(err);
            });
        }
    }
};
