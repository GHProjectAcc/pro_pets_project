import React, {useEffect} from "react";
import HeaderLostFound from "./Pages/LostPage/HeaderLostFound";
import NavigationSmall from "./Pages/HomePage/NavigationSmallHome";
import Navigation from "./Pages/HomePage/NavigationHome";
import {useMediaQuery} from "react-responsive/src";
import MainLost from "./Pages/LostPage/MainLost";
import style from "../css_modules/lostPage.module.css";
import {fetchPostLostFeed} from "../redux/actions/PostLostActions";
import {connect} from "react-redux";
import {store} from "../redux/ProPetsStore";
import RightColorSide from "./Pages/HomePage/RightColorSideHome";


const LostPage = (props) => {
    const small = useMediaQuery({query: '(maxWidth: 767px'});
    const medium = useMediaQuery({query: '(minWidth: 768px'});
    /*  console.log(store.getState())*/
    /*useEffect(() => {
        props.fetchPostsLostFeed();
        console.log(store.getState())
    });*/

    return (
        <div className={`${style.page} container`}>
            <HeaderLostFound/>
            <div className='row h-100'>
                {(small || medium) ? <NavigationSmall/> : <Navigation/>}
                <MainLost/>
                <RightColorSide/>
            </div>
        </div>
    );

};
/*const mapDispatchToProps = dispatch => ({
    fetchPostsLostFeed: () => dispatch(fetchPostLostFeed())
});*/

export default /*connect(null, mapDispatchToProps)*/LostPage;