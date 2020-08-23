import React, {useEffect, useState} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Registration from './components/Registration'
import Home from "./components/Home";
import AddPost from "./components/AddPost";
import NewPostMatched from "./components/NewPostMatched";
import Profile from "./components/Profile";
import LostPage from "./components/Lost";
import Favorites from "./components/Favorites";
import style from "./css_modules/favorites.module.css";
import Header from "./components/Header";
import RightColorSide from "./components/Pages/HomePage/RightColorSideHome";
import DropMenu from "./components/DropMenu";
import Menu from "./components/Menu";
import {useMediaQuery} from "react-responsive/src";
import {getFavoritesPostsPage} from "./redux/actions/FavoritesPostsActions";
import {createBrowserHistory} from 'history';


const App = (props) => {

    const smallMedium = useMediaQuery({maxWidth: 991.98});
    const [dropMenu, setDropMenu] = useState(false);
    //const [path, setPath] = useState('home');
    const brHistory = createBrowserHistory();

    const showDropMenu = () => {
        setDropMenu(!dropMenu)
    };

    useEffect(() => {

    });
    const path = window.location.pathname;
    console.log(path);

    const token = JSON.parse(localStorage.getItem('token'));
    return (
        <Switch>
            {token ?
                <React.Fragment>
                    <div
                        className={`${dropMenu ? style.containerFixed : style.container} container border-dark px-lg-0`}>
                        <Header showDropMenu={showDropMenu}
                                path={path}/>

                        <div className='row h-100'>
                            {smallMedium
                                ?
                                <DropMenu display={dropMenu}
                                          showDropMenu={showDropMenu}
                                          path={path}/>
                                :
                                <Menu display={dropMenu}
                                      path={path}/>}

                            <Route exact path={['/', '/home', '/home/:pageNumber']} component={Home}/> {/*render={(props) =>
                                (<Home {...props}
                                       dropMenu={dropMenu}
                                       showDropMenu={showDropMenu}
                                       setPath={setPath}/>)}/>*/}
                            <Route exact path='/addpost' component={AddPost}/>
                            <Route exact path='/new_matched' component={NewPostMatched}/>
                            <Route exact path='/profile' render={(props) => (
                                <Profile {...props}
                                         showDropMenu={showDropMenu}
                                />)}/>
                            <Route exact path={['/found', '/found/:pageNumber']} render={(props) =>
                                (<LostPage {...props}
                                           dropMenu={dropMenu}
                                           showDropMenu={showDropMenu}
                                           path={path}/>)}/>
                            <Route exact path={['/lost', '/lost/:pageNumber']} render={(props) =>
                                (<LostPage {...props}
                                           dropMenu={dropMenu}
                                           showDropMenu={showDropMenu}/>)}/>
                            <Route exact path={['/favorites', '/favorites/:pageNumber']} render={(props) =>
                                (<Favorites {...props}
                                            dropMenu={dropMenu}
                                            showDropMenu={showDropMenu}
                                            path={path}
                                            history={brHistory}/>)
                            }/>
                            <RightColorSide/>
                        </div>
                    </div>
                </React.Fragment>
                :
                <React.Fragment>
                    <Route exact path={"/signup"} component={Registration}/>
                    <Route exact path={["/", "/signin",]} component={LoginPage}/>
                </React.Fragment>
            }


        </Switch>
    );
};


const mapDispatchToProps = dispatch => ({
    getFavoritesPostsPage: pageNumber => dispatch(getFavoritesPostsPage(pageNumber))
});

/*
function mapStateToProps(state) {
    return {
        posts: state.posts.posts
    }
}
*/

export default withRouter(App);

