import React, {useEffect, useState} from "react";
import style from "../css_modules/favorites.module.css"
import Header from "./Header";
import Main from "./Pages/FavoritesPage/FavoriteMain";
import Pagination from "./Pagination";
import {connect} from "react-redux";


const Favorites = (props) => {


    const [dropMenu, setDropMenu] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);

    const changePage = (page) => {
        /*  setPage(page);*/
    };

    const showDropMenu = () => {
        setDropMenu(!dropMenu);
    };
    const pageNum = props.match.params.pageNumber || '1';

    useEffect(() => {

    });

    return (
        <div className={`${dropMenu ? style.containerFixed : style.container} container border-dark px-lg-0`}>
            <Header showDropMenu={showDropMenu}/>
            <Main dropMenu={dropMenu}
                  cnangePage={changePage}
                  pageNumber={pageNum}/>

        </div>
    );
};

/*function mapStateToProps(state) {
    return {
post:
    }
}*/

export default Favorites;