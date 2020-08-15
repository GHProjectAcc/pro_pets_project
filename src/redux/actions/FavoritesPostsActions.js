import axios from "axios";
import history from "../../history";

export const FAVORITES_POSTS_PAGE = 'FAVORITES_POST_PAGE';

export const getFavoritesPosts = posts => ({
    type: FAVORITES_POSTS_PAGE,
    payload: posts
});

export const getFavoritesPostsPage = (page) => {
    return dispatch => {
        const token = JSON.parse(localStorage.getItem('token'));
       // console.log(token);
        if (token) {
            axios({
                url: `https://propets-gateway-service.herokuapp.com/message/v1/post/favorites/?page=${page}`,
                method: "GET",
                headers: {
                    /* 'Content-Type': 'application/json',*/
                    'Authorization': `Bearer ${token}`
                }
            }).then(function (response) {
                console.log(response.data);
                dispatch(getFavoritesPosts(response.data))
                history.push(`/favorites/${page}`)
            }).catch(function (err) {
                console.log('fuck');
                console.log(err);
            })
        }
    }
};
