import React from "react";
import HeaderAddPost from "./Pages/AddPostPage/HeaderAddPost";
import NavigationSmall from "./Pages/HomePage/NavigationSmallHome";
import Navigation from "./Pages/HomePage/NavigationHome";
import AdRightColumn from "./Pages/HomePage/RightColorSideHome";
import MainAddPost from "./Pages/AddPostPage/MainAddPost";
import {useMediaQuery} from "react-responsive/src";

const AddPost = (props) => {
    const small = useMediaQuery({query: '(maxWidth: 767px'});
    const medium = useMediaQuery({query: '(minWidth: 768px'});

    return (
        <div className='container'>
            <HeaderAddPost/>
            <div className='row'>
                {small || medium ? <NavigationSmall/> : <Navigation/>}
                <MainAddPost/>
                <AdRightColumn/>
            </div>
        </div>


    );
};

export default AddPost;