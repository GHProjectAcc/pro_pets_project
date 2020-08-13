import axios from "axios";

export const POST_LOST_FEED = 'POST_LOST_FEED';

export const getLostFeed = posts => ({
        type: POST_LOST_FEED,
        payload: posts
    })
;

export const fetchPostLostFeed = () => {
    console.log('tut')
    return dispatch => {
        const token = localStorage.token;
        console.log(token);
        if (token) {
             axios({
                 url: "https://propets-lostfound-service.herokuapp.com/lostFound/lost/v1/post/feed?page=1",
                 method: "GET",
                 headers: {
                     'Content-Type': 'application/json',
                     'Authorization': `Bearer ${token}`
                 }
             }).then(function (response) {
                 console.log(response);
                 console.log(response.data);
                 dispatch(getLostFeed(response.data))
             }).catch(function (err) {
                 console.log('fuck')
                 console.log(err);
             })
           /* return fetch("https://propets-gateway-service.herokuapp.com/lostFound/lost/v1/post/feed?page=1", {
                method: "GET",
                headers: {

                    'Authorization': `Bearer ${token}`
                },
            }).then(function (response) {
                console.log(response.status)
                /!* if (response.status !== 200) {
                     console.log('Looks like there was a problem. Status Code: ' + response.status);
                     alert(response.status + ' ');
                     return Promise.reject();
                 }
                 return response;*!/
            }).then(function (response) {
                /!*  let token = response.headers.get('X-token');
                  console.log(token);
                  localStorage.setItem("token", token);
                  return response;*!/
            })*/

        }
    }
};