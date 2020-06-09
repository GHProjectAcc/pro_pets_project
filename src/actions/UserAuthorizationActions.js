export const LOGIN_USER = 'LOGIN_USER';
export const REGISTRATION_USER = 'REGISTRATION_USER';
export const LOGOUT_USER = 'LOGOUT_USER';



//
// export const registrationUser = userObj => ({
//     type: 'REGISTRATION_USER',
//     payload: userObj
// });

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
        return fetch("http://localhost:3000/api/v1/users", {
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
                    //Тут прописываем логику
                } else {
                    localStorage.setItem("token", data);
               return { type: LOGIN_USER, payload: data }
                }
            })
    }
};

export const loginUser = userObj => ({
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
                      return  { type: LOGIN_USER, payload: data };
                    }
                })
        }
    }
};