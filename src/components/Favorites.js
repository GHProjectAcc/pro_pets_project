import React, {useEffect, useState} from "react";
import style from "../css_modules/favorites.module.css"
import Header from "./Header";
import Main from "./Pages/FavoritesPage/FavoriteMain";
import Pagination from "./Pagination";
import {connect} from "react-redux";
import {getFavoritesPosts, getFavoritesPostsPage} from "../redux/actions/FavoritesPostsActions";


const Favorites = (props) => {


    const [dropMenu, setDropMenu] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);

    const changePage = (page) => {
        /*  setPage(page);*/
    };

    const showDropMenu = () => {
        setDropMenu(!dropMenu);
    };
    /* const pageNum = props.match.params.pageNumber || '1';*/

    useEffect(() => {
        props.getFavoritesPostsPage(pageNumber);
    }, [pageNumber]);


    return (
        <div className={`${dropMenu ? style.containerFixed : style.container} container border-dark px-lg-0`}>
            <Header showDropMenu={showDropMenu}/>
            <Main dropMenu={dropMenu}
                  cnangePage={changePage}
                  pageNumber={pageNumber}
                  setPageNumber={setPageNumber}/>
        </div>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        getFavoritesPostsPage: pageNumber => dispatch(getFavoritesPostsPage(pageNumber))
    }
}

export default connect(null, mapDispatchToProps)(Favorites);