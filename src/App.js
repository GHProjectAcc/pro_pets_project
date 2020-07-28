import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {getProfileFetch, logoutUser} from './redux/actions/UserAuthorizationActions';
import Signup from './components/Signup';
import LoginPage from './components/LoginPage';
import Registration from './components/Registration'
import StartPageV2 from "./components/StarPageV2";
import Home from "./components/Home";
import AddPost from "./components/AddPost";
import NewPostMatched from "./components/NewPostMatched";
import Profile from "./components/Profile";
import LostPage from "./components/Lost";
import AllPostsMatched from "./components/AllPostsMatched";


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
                    <Route exact path={["/signup", '/']} component={Registration}/>
                    <Route exact path="/signin" component={LoginPage}/>
                    <Route exact path={['/home', '/home/:page']} component={Home}/>
                    <Route exact path='/addpost' component={AddPost}/>
                    <Route exact path='/new_matched' component={NewPostMatched}/>
                    <Route exact path='/allPostsMatched' component={AllPostsMatched}/>
                    <Route exact path='/profile' component={Profile}/>
                    <Route exact path='/lost' component={LostPage}/>
                    <Route exact path='/found' component={LostPage}/>
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

