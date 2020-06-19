export const LOGIN_USER = 'LOGIN_USER';
export const REGISTRATION_USER = 'REGISTRATION_USER';
export const LOGOUT_USER = 'LOGOUT_USER';


export const registrationUser = userObj => ({
    type: 'REGISTRATION_USER',
    payload: userObj
});

export const logoutUser = () => ({
    type: 'LOGOUT_USER'
});

export const userLoginFetch = user => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({user})
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.message) {
                    //тут ваша логика
                } else {
                    localStorage.setItem("token", data);
                    dispatch(loginUser(data.user))
                }
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
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
});


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