import history from "../history";

export const LOGIN_USER = 'LOGIN_USER';
export const REGISTRATION_USER = 'REGISTRATION_USER';
export const LOGOUT_USER = 'LOGOUT_USER';


export const registrationUser = userObj => ({
    type: REGISTRATION_USER,
    payload: userObj
});

const loginUser = user => ({
    type: LOGIN_USER,
    payload: user
});

export const logoutUser = () => ({
    type: 'LOGOUT_USER'
});

export const userLoginFetch = authData => {
    console.log(authData)
    return dispatch => {
        return fetch("https://propets-accounting-service.herokuapp.com/account/v1/sign_in", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Basic ${authData}`,
            },
        }).then(function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                alert(response.status + ' ');
                return Promise.reject();
            }
            return response;
        }).then(function (response) {
            let token = response.headers.get('X-token');
            console.log(token);
            localStorage.setItem("token", token);
            return response;
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);

                dispatch(loginUser(data));
                history.push('home');

            })
    }
};

export const userPostFetch = user => {
    return dispatch => {
        return fetch("http://localhost:8080/account/v1/sign_up", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({user})
        })
            .then(function (response) {
                if (!response.status) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                }
                response.json().then(data => console.log(data))
            })
        /*.then(data => {
            if (data.message) {

            } else {

                localStorage.setItem("token", data);
                dispatch(loginUser(data.user))
            }*/
    }
};


export const getProfileFetch = () => {
    return dispatch => {
        const token = localStorage.token;
        if (token) {
            return fetch("http://localhost:3000/api/v1/profile", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(resp => resp.json())
                .then(data => {
                    if (data.message) {
                        // Будет ошибка если token не дествительный
                        //
                        localStorage.removeItem("token")
                    } else {
                        return {type: LOGIN_USER, payload: data};
                    }
                })
        }
    }
};