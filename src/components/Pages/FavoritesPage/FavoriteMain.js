/*
import React from "react";
import DropMenu from "./DropMenu";
import Menu from "../../Menu";
import Post from "./FavoritePost";
import RightColorSide from "../HomePage/RightColorSideHome";
import {useMediaQuery} from "react-responsive/src";
import Pagination from "../../Pagination";
import {connect} from "react-redux";

const Main = (props) => {
    const smallMedium = useMediaQuery({maxWidth: 991.98});
    const createPostFavorites = (post, index) => {
        return <Post key={post.id} index={index}/>
    };

    return (
        <div className='row'>
            {smallMedium ?
                <DropMenu display={props.dropMenu}
                          pageNumber={props.pageNumber}/>
                :
                <Menu display={props.dropMenu}
                      pageNumber={props.pageNumber}/>}
            <div className='col-12 col-lg-8 col-xl-6 ml-lg-0 pt-3 px-lg-2'>
                {props.posts.map(createPostFavorites)}
            </div>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Main);*/
