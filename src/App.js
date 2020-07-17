import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {getProfileFetch, logoutUser} from './actions/UserAuthorizationActions';
import Signup from './components/Signup';
import LoginPage from './components/Pages/LoginPage';
import RegistrationPage from './components/Pages/RegistrationPage'
import StartPageV2 from "./components/Pages/StarPageV2";
import Home from "./components/Pages/HomePage";
import AddPost from "./components/Pages/AddPostPage";
import NewPostMatched from "./components/Pages/NewPostMatchedPage";
import Profile from "./components/Pages/ProfilePage";


class App extends React.Component {
    componentDidMount = () => {
        this.props.getProfileFetch()
    };

    handleClick = event => {
        event.preventDefault();
        // Удаление token из localStorage
        localStorage.removeItem("token");
        // удаление из Redux хранилица
        this.props.logoutUser()
    };

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={["/signup", '/']} component={RegistrationPage}/>
                    <Route exact path="/signin" component={LoginPage}/>
                    <Route exact path={['/home', '/home/:page']} component={Home}/>
                    <Route exact path='/addpost' component={AddPost}/>
                    <Route exact path='/new_matched' component={NewPostMatched}/>
                    <Route exact path='/profile' component={Profile}/>}
                </Switch>
                {/*{this.props.currentUser.username*/}
                {/*    ? <button onClick={this.handleClick}>Log Out</button>*/}
                {/*    : null*/}
                {/*}*/}
            </div>
        );
    }
}

// const mapStateToProps = state => ({
//     currentUser: state.currentUser
// });

const mapDispatchToProps = dispatch => ({
    getProfileFetch: () => dispatch(getProfileFetch()),
    logoutUser: () => dispatch(logoutUser())
});

export default connect(null, mapDispatchToProps)(App);

/*import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {getProfileFetch} from './actions/UserAuthorizationActions';
import Signup from './components/Signup';
import Login from './components/Login';
import StartPage from "./components/StartPage";
import {createBrowserHistory} from 'history';
import StartPageV2 from "./components/StarPageV2";

export const history = createBrowserHistory();

class App extends Component {

    componentDidMount() {
       // this.props.getProfileFetch()
    };

    render() {
        return (
            <StartPageV2/>
        )
    }
    //     return (
    //         <div>
    //             <Router>
    //                 <Switch>
    //                     <Route path='/startpage' component={StartPage}/>
    //                     <Route path="/signup" component={Signup}/>
    //                     <Route path="/login" component={Login}/>
    //                 </Switch>
    //             </Router>
    //         </div>
    //     );
    // }
}

const mapStateToProps = state => ({
    currentUser: state.userReducer.currentUser
})

const mapDispatchToProps = dispatch => {
    return {
        getProfileFetch: () => dispatch(getProfileFetch())
    }
};

export default connect(null, mapDispatchToProps)(App);*/
