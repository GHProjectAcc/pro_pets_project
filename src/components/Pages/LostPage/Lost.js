import React, {useEffect} from "react";
import HeaderLostFound from "./HeaderLostFound";
import NavigationSmall from "../HomePage/NavigationSmallHome";
import Navigation from "../HomePage/NavigationHome";
import {useMediaQuery} from "react-responsive/src";
import MainLost from "./MainLost";
import style from "../../../css_modules/lostPage.module.css";
import {fetchPostLostFeed} from "../../../redux/actions/PostLostActions";
import {connect} from "react-redux";
import {store} from "../../../redux/ProPetsStore";


const LostPage = (props) => {
    const small = useMediaQuery({query: '(maxWidth: 767px'});
    const medium = useMediaQuery({query: '(minWidth: 768px'});
  /*  console.log(store.getState())*/
    /*useEffect(() => {
        props.fetchPostsLostFeed();
        console.log(store.getState())
    });*/

    return (
        <div className={`${style.page} container h-100`}>
            <HeaderLostFound/>
            <div className='row h-100'>
                {(small || medium) ? <NavigationSmall/> : <Navigation/>}
                <MainLost/>
            </div>
        </div>
    );

};
/*const mapDispatchToProps = dispatch => ({
    fetchPostsLostFeed: () => dispatch(fetchPostLostFeed())
});*/

export default /*connect(null, mapDispatchToProps)*/LostPage;