import React from "react";
import axios from "axios";



class AllPostsMatched extends React.Component {
    state = {
        login: "tigran1000@gmail.com",
        password: "777"
    };


    componentDidMount() {
        const authData = window.btoa(this.state.login + ':' + this.state.password);
        console.log(authData);
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
            console.log(response.data);
        }).catch(function (err) {
            console.log('fuck');
            console.log(err);
        })
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