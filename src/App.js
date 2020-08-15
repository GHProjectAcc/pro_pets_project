import React, {useState} from 'react';
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
import Favorites from "./components/Favorites";
import style from "./css_modules/favorites.module.css";
import Header from "./components/Header";
import RightColorSide from "./components/Pages/HomePage/RightColorSideHome";
import DropMenu from "./components/Pages/FavoritesPage/DropMenu";
import Menu from "./components/Menu";
import {smallMedium} from "./constants/constans";
import {useMediaQuery} from "react-responsive/src";


const App = (props) => {


    const [dropMenu, setDropMenu] = useState(false);
    const [path, setPath] = useState('home');


    const showDropMenu = () => {
        setDropMenu(!dropMenu)
    };

    /* handleClick = event => {
         event.preventDefault();
         // Удаление token из localStorage
         localStorage.removeItem("token");
         // удаление из Redux хранилица
         this.props.logoutUser()
     };*/

    console.log(path);

    return (
        <div
            className={`${dropMenu ? style.containerFixed : style.container} container border-dark px-lg-0`}>
            <Header showDropMenu={showDropMenu}
                    path={path}/>

            <Switch>
                <Route exact path={["/signup", '/']} component={Registration}/>
                <Route exact path="/signin" component={LoginPage}/>
                <Route exact path={['/home/:pageNumber']} render={(props) =>
                    (<Home {...props}
                           dropMenu={dropMenu}
                           showDropMenu={showDropMenu}
                           setPath={setPath}/>)}/>
                <Route exact path='/addpost' component={AddPost}/>
                <Route exact path='/new_matched' component={NewPostMatched}/>
                <Route exact path='/profile' component={Profile}/>
                <Route exact path={['/found', '/found/:pageNumber']} render={(props) =>
                    (<LostPage {...props}
                               dropMenu={dropMenu}
                               showDropMenu={showDropMenu}
                               setPath={setPath}/>)}/>
                <Route exact path={['/lost', '/lost/:pageNumber']} render={(props) =>
                    (<LostPage {...props}
                               dropMenu={dropMenu}
                               showDropMenu={showDropMenu}
                               setPath={setPath}/>)}/>
                <Route exact path={['/found', '/found/:pageNumber']} component={LostPage}/>
                <Route exact path={['/favorites', '/favorites/:pageNumber']} render={(props) =>
                    (<Favorites {...props}
                                dropMenu={dropMenu}
                                showDropMenu={showDropMenu}
                                setPath={setPath}/>)}/>
            </Switch>
        </div>
    );

}

// const mapStateToProps = state => ({
//     currentUser: state.currentUser
// });

const mapDispatchToProps = dispatch => ({
    getProfileFetch: () => dispatch(getProfileFetch()),
    logoutUser: () => dispatch(logoutUser())
});

export default connect(null, mapDispatchToProps)(App);

