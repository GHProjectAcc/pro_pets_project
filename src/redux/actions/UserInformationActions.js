import axios from "axios";
import history from "../../history";
import {getFavoritesPosts} from "./FavoritesPostsActions";

export const USER_INFO = 'USER_INFO';

export const userInfo = user => ({
    type: USER_INFO,
    payload: user
});

export const getUserInformationFetch = (token) => {
    return dispatch => {
        const token = JSON.parse(localStorage.getItem('token'));
        console.log(token)
        console.log('in fetch getUser')
            axios({
                url: `https://propets-gateway-service.herokuapp.com/account/v1/user/refresh_page`,
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(function (response) {
                console.log(response.data);
                dispatch(userInfo(response.data));
            }).catch(function (err) {
                console.log('fuck');
                console.log(err);
            });
        }
};