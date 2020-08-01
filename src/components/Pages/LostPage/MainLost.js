import React from "react";
import style from "../../../css_modules/lostPage.module.css";
import MainInputButtons from "./MainComponents/MainIputButtons";
import MainInputLocation from "./MainComponents/MainInputLocation";
import PostLost from "./MainComponents/PostLost";
import {connect} from "react-redux";

const MainLost = (props) => {

    const createPostLost = (post, index) => {
        return (<div className={`${style.lostPostContainer} container mt-lg-4 mx-lg-3 `}>
            <PostLost index={index} key={post.id}/>
        </div>)
    };
    return (
        <div className='col-lg-8 pt-lg-4 container '>
            <div className='row'>
                <MainInputButtons/>
                <MainInputLocation/>
                {props.postsLost.map(createPostLost)}
            </div>

        </div>
    );
};

function mapStateToProps(state) {
    return {
        postsLost: state.postsLost
    }
}

export default connect(mapStateToProps)(MainLost);