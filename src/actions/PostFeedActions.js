import history from "../history";


export const POST_FEED = 'POST_FEED';

export const getFeed = payload => ({
        type: POST_FEED,
        payload: payload
    })
;

export const getPostFeed = () => {
    return dispatch => {
        const token = localStorage.token;
        if (token) {
            return fetch("https://propets-accounting-service.herokuapp.com/account/v1/sign_in", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }).then(function (response) {
                if (response.status !== 200) {

                }
                return response;
            }).then(response => response.json())
                .then(data => {
                    dispatch(getFeed(data))
                })
        }
    }

};
