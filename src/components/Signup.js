import React from "react";
import {connect} from 'react-redux';
import {userPostFetch} from '../redux/actions/UserAuthorizationActions';
import history from "../history";

class Signup extends React.Component {
    state = {
        username: "",
        password: "",
        email: "",
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.userPostFetch(this.state);
        history.push('/home')
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Sign Up For An Account</h1>

                <label>Username</label>
                <input
                    name='username'
                    placeholder='Username'
                    value={this.state.username}
                    onChange={this.handleChange}
                /><br/>

                <label>Password</label>
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={this.state.password}
                    onChange={this.handleChange}
                /><br/>

                <label>Em@il</label>
                <input
                    name='email'
                    placeholder='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                /><br/>

                <input type='submit'/>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
});

export default connect(null, mapDispatchToProps)(Signup);