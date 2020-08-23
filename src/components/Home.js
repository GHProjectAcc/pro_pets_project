import React, {useEffect, useState} from "react";
import Post from "./Pages/HomePage/PostComponents/PostHome";
import Pagination from "./Pagination";
import {connect} from "react-redux";
import {getHomePostsPage} from "../redux/actions/HomePostsActions";
import {withRouter} from "react-router-dom";


const Home = (props) => {

    const [pageNumber, setPageNumber] = useState(1);

    const createPostFavorites = (post, index) => {
        return <Post key={post.id} index={index}/>
    };

    const changePage = (page) => {
        setPageNumber(page);
    };


    /*editFavorites = () => {
        this.setState({
            favorites: !this.state.favorites
        });
    };*/
    useEffect(() => {
        const fetchData = async () => {
            props.getPostsFeed(pageNumber)
        };
        fetchData();
    }, [pageNumber]);

    let path = window.location.pathname;

    return (


        <div className='col-12 col-lg-8 col-xl-6 ml-lg-0 pt-3 px-lg-2'>
            {props.posts.map(createPostFavorites)}
            <Pagination changePage={changePage}
                        pageNumber={pageNumber}/>
        </div>

    );
};
const mapDispatchToProps = dispatch => ({
    getPostsFeed: pageNumber => dispatch(getHomePostsPage(pageNumber))
});

function mapStateToProps(state) {
    return {
        posts: state.postsHome.posts
    }
}

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));