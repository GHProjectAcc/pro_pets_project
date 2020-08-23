import axios from "axios";
import history from "../../history";

export const HOME_POSTS = 'HOME_POSTS';

export const getHomePosts = posts => ({
    type: HOME_POSTS,
    payload: posts
});

export const getHomePostsPage = (pageNumber) => {
    return dispatch => {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            axios({
                url: `https://propets-gateway-service.herokuapp.com/message/v1/post/feed?page=${pageNumber - 1}`,
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(function (response) {
                console.log(response.data);
                dispatch(getHomePosts(response.data));
                history.push(`/home/${pageNumber}`)
            }).catch(function (err) {
                console.log('fuck');
                console.log(err);
            });
        }
    }
};