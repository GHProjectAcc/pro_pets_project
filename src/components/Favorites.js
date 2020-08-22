import React, {useEffect, useState} from "react";
import Pagination from "./Pagination";
import {connect} from "react-redux";
import {getFavoritesPostsPage} from "../redux/actions/FavoritesPostsActions";
import Post from "./Pages/FavoritesPage/FavoritePost";
import {store} from "../redux/ProPetsStore";


const Favorites = (props) => {

    const [pageNumber, setPageNumber] = useState(1);

    const changePage = (page) => {
        setPageNumber(page);
    };

    const createPostFavorites = (post, index) => {
        return <Post key={post.id} index={index}/>
    };

    useEffect(() => {
        const fetchData = async () => {
            props.getPostsFeed(pageNumber)
        };
        fetchData();
    }, [pageNumber]);


    console.log(store.getState());
    return (
        <div className='col-12 col-lg-8 col-xl-6 ml-lg-0 pt-3 px-lg-2'>
            {props.posts.map(createPostFavorites)}
            <Pagination changePage={changePage}
                        pageNumber={pageNumber}/>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    getPostsFeed: pageNumber => dispatch(getFavoritesPostsPage(pageNumber))
});


function mapStateToProps(state) {
    return {
        posts: state.postsFavorites.posts
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);