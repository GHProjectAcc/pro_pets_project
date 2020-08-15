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
import Menu from "./Menu";


const LostPage = (props) => {
    const smallMedium = useMediaQuery({maxWidth: 991.98});
    /* const medium = useMediaQuery({query: '(minWidth: 768px'});*/
    /*  console.log(store.getState())*/
    /*useEffect(() => {
        props.fetchPostsLostFeed();
        console.log(store.getState())
    });*/
    useEffect(() => {
        props.setPath('/lost')
    });
    return (
        <div className='row h-100'>
            {smallMedium ? <NavigationSmall/> : <Menu/>}
            <MainLost/>
            <RightColorSide/>
        </div>
    );

};
/*const mapDispatchToProps = dispatch => ({
    fetchPostsLostFeed: () => dispatch(fetchPostLostFeed())
});*/

export default /*connect(null, mapDispatchToProps)*/LostPage;