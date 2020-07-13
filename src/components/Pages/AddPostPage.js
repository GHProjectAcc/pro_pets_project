import React from "react";
import HeaderAddPost from "../AddPostComponents/HeaderAddPost";
import NavigationSmall from "../HomePageComponents/NavigationSmallHome";
import Navigation from "../HomePageComponents/NavigationHome";
import AdRightColumn from "../HomePageComponents/AdvertisingHome";
import MainAddPost from "../AddPostComponents/MainAddPost";

class AddPost extends React.Component {
    render() {
        return (
            <div className='container'>
                <HeaderAddPost/>
                <div className='row'>
                    {window.matchMedia('(max-width: 768px)').matches ? <NavigationSmall/> : <Navigation/>}
                    <MainAddPost/>
                    <AdRightColumn/>
                </div>
            </div>


        );
    }

}

export default AddPost;