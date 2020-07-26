import React from "react";
import HeaderAddPost from "./HeaderAddPost";
import NavigationSmall from "../HomePage/NavigationSmallHome";
import Navigation from "../HomePage/NavigationHome";
import AdRightColumn from "../HomePage/AdvertisingHome";
import MainAddPost from "./MainAddPost";
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