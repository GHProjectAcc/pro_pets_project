import axios from "axios";
import history from "../../history";

export const LOGIN_USER = 'LOGIN_USER';

const loginUser = user => ({
    type: LOGIN_USER,
    payload: user
});


export const userLoginFetch = authData => {
    console.log(authData);
    return dispatch => {
        axios({
            url: `https://propets-gateway-service.herokuapp.com/account/v1/sign_in`,
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Authorization': `Basic ${authData}`,
            }
        }).then(function (response) {
            let token = response.headers.get('X-token');
            console.log(token);
            localStorage.setItem("token", JSON.stringify(token));
        }).then(function (response) {
            dispatch(loginUser(response.data));
            history.push('home/1');
        }).catch(function (err) {
            console.log('fuck');
            console.log(err);
        })
    }
};