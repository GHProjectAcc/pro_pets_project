import React from "react";
import style from "../../../../css_modules/lostPage.module.css";
import {connect} from "react-redux";

const MainPostContentContainer = (props) => {
    console.log(props.postsFeed);
    return (
        <div className='mt-3  col-lg-7 row'>
            <div className={`${style.postTitle} col-lg-12`}>
                <span>{/*{props.postsFeed[0].type}*/}, </span>
                <span>{/*{props.postsFeed[0].breed}*/}</span>
            </div>
            <div className='col-lg-6'>
                <div>
                    <span>Color: props color</span>
                </div>
                <div>
                    <span>Sex: props color</span>
                </div>
                <div>
                    <span>Height: props color</span>
                </div>
            </div>
            <div className='col-lg-6'>
                <span>Distinctive features:</span>
                <span>props features</span>
            </div>
            <div className='col-lg-12'>
                <span>Description: </span>
                <span>props description</span>
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