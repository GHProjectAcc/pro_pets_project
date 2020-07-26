import React from "react";
import style from "../../../../css_modules/lostPage.module.css";
import {connect} from "react-redux";

const MainPostImageContainer = (props) => {
    return (
        <div className='col-lg-5 d-flex justify-content-center'>
            <div className={`${style.lostImageBox} `}>
                <img src={props.photoLost}
                     alt=''/>
            </div>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        photoLost: state.postsLost
    }
}

export default connect(mapStateToProps)(MainPostImageContainer);