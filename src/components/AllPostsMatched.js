import React from "react";
import axios from "axios";


class AllPostsMatched extends React.Component {

    componentDidMount() {
        const token = localStorage.token;
        console.log('didMount');
        console.log(token);
        if (token) {
            console.log('tut');
            return axios({
                url: "https://propets-gateway-service.herokuapp.com/account/v1/user/olga.krasnozhon3101@gmail.com",
                method: "GET",
                headers: {

                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }).then(function (response) {
                if (response.status !== 200) {
                    console.log(response.status);
                    console.log('not req');
                }
                console.log('req');
                return response;
            })
        }
    }

    render() {
        return (
            <div>
                <span>Bla bla bla</span>
            </div>
        );
    }
}

export default AllPostsMatched;