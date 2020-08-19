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
    /*const path = props.path;*/
    useEffect(() => {
        props.setPath('/lost')
    }, [props]);

    return (

        <div className='col-lg-8 pt-lg-4 container '>
            <MainLost/>
        </div>
    );

};
/*const mapDispatchToProps = dispatch => ({
    fetchPostsLostFeed: () => dispatch(fetchPostLostFeed())
});*/

export default /*connect(null, mapDispatchToProps)*/LostPage;