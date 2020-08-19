import React, {useEffect, useState} from "react";
import Pagination from "./Pagination";
import {connect} from "react-redux";
import {getFavoritesPostsPage} from "../redux/actions/FavoritesPostsActions";
import Post from "./Pages/FavoritesPage/FavoritePost";
import {store} from "../redux/ProPetsStore";


const Favorites = (props) => {
    console.log(store.getState());
    //console.log('component')
    const [pageNumber, setPageNumber] = useState(1);

    const createPostFavorites = (post, index) => {
        return <Post key={post.id} index={index}/>
    };

    const changePage = (page) => {
        setPageNumber(page);
    };

    useEffect(() => {
        const fetchData = async () => {
            props.getFavoritesPostsPage(pageNumber)
        };
        fetchData();
        // props.getFavoritesPostsPage(pageNumber);
        console.log('in useEffect')
    }, [pageNumber]);

    console.log(pageNumber)
    return (
        <div className='col-12 col-lg-8 col-xl-6 ml-lg-0 pt-3 px-lg-2'>
            {props.posts.map(createPostFavorites)}
            <Pagination changePage={changePage}
                        pageNumber={pageNumber}/>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    getFavoritesPostsPage: pageNumber => dispatch(getFavoritesPostsPage(pageNumber))
});


function mapStateToProps(state) {
    return {
        posts: state.posts.posts
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);