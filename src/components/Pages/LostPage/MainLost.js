import React from "react";
import style from "../../../css_modules/lostPage.module.css";
import MainInputButtons from "./MainComponents/MainIputButtons";
import {store} from "../../../redux/ProPetsStore";
import MainPostImageContainer from "./MainComponents/MainPostImageContainer";
import MainPostContentContainer from "./MainComponents/MainPostContentContainer";
import MainLocation from "./MainComponents/MainLocation";
import PostLost from "./MainComponents/PostLost";

const MainLost = (props) => {
    /* console.log(store.getState())*/
    return (
        <div className='col-lg-8 pt-lg-4 container '>
            <div className='row'>
                <MainInputButtons/>
                <MainLocation/>
                <div className={`${style.lostPostContainer} container mt-lg-4 mx-lg-2`}>
                    <PostLost/>
                </div>
            </div>

        </div>
    );
};


export default MainLost;