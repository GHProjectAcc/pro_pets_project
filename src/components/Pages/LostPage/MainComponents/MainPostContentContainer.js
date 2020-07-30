import React from "react";
import style from "../../../../css_modules/lostPage.module.css";
import {connect} from "react-redux";

const MainPostContentContainer = (props) => {
    console.log(props.postsFeed);
    return (
        <div className='mt-3 col-lg-7 row'>
            <div className={`${style.postTitle} col-lg-12`}>
                <span>Dog, </span>
                <span>Ovcharka</span>
            </div>
            <div className='col-lg-6'>
                <div>
                    <span className={`${style.propertiesText}`}>Color: <span>props </span></span>
                </div>
                <div>
                    <span className={`${style.propertiesText}`}>Sex: <span>props </span></span>
                </div>
                <div>
                    <span className={`${style.propertiesText}`}>Height: <span>props </span></span>
                </div>
            </div>
            <div className='col-lg-6'>
                <span className={`${style.propertiesText}`}>Distinctive features: <span>props </span></span>
            </div>
            <div className='col-lg-12'>
                <span className={`${style.propertiesText}`}>Description: <span>props description</span></span>

            </div>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        /* postsFeed: state.postsLost*/
    }
}

export default connect(mapStateToProps)(MainPostContentContainer);