import React, {useEffect, useState} from "react";
import style from "../css_modules/favorites.module.css"
import Header from "./Header";
import Main from "./Pages/FavoritesPage/FavoriteMain";
import Pagination from "./Pagination";
import {connect} from "react-redux";
import {getFavoritesPosts, getFavoritesPostsPage} from "../redux/actions/FavoritesPostsActions";
import DropMenu from "./Pages/FavoritesPage/DropMenu";
import Menu from "./Menu";
import {useMediaQuery} from "react-responsive/src";
import Post from "./Pages/FavoritesPage/FavoritePost";
import RightColorSide from "./Pages/HomePage/RightColorSideHome";
import Home from "./Home";


const Favorites = (props) => {
    const smallMedium = useMediaQuery({maxWidth: 991.98});
    const [pageNumber, setPageNumber] = useState(1);

    const createPostFavorites = (post, index) => {
        return <Post key={post.id} index={index}/>
    };

    const changePage = (page) => {
        setPageNumber(page);
        console.log(pageNumber)
    };

    /* const pageNum = props.match.params.pageNumber || '1';*/

    useEffect(() => {
        props.getFavoritesPostsPage(pageNumber);
        props.setPath('/favorites')
    }, [pageNumber]);


    return (
        <div className='row'>
            {smallMedium ?
                <DropMenu display={props.dropMenu}
                          pageNumber={pageNumber}
                          />
                :
                <Menu display={props.dropMenu}
                      pageNumber={pageNumber}

                />}
            <div className='col-12 col-lg-8 col-xl-6 ml-lg-0 pt-3 px-lg-2'>
                {props.posts.map(createPostFavorites)}
                <Pagination changePage={changePage}
                            pageNumber={pageNumber}/>
            </div>
            <RightColorSide/>
        </div>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        getFavoritesPostsPage: pageNumber => dispatch(getFavoritesPostsPage(pageNumber))
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);