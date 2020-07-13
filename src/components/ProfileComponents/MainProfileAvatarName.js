import React from "react";
import style from "../../css_modules/profile.module.css";
import {connect} from "react-redux";

const AvatarName = (props) => {
    return (
        <div className='col-12 mt-4 row mx-0 align-items-center '>
            <div className={`col-3 text-right `}>
                <img className={`${style.avatar} `}
                     src={props.user.avatarAuthor}
                     alt=''/>
            </div>
            <div className={`col-9 pl-0`}>
                <span className={`${style.authorName} font-weight-bold`}>{props.user.name}</span>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(AvatarName);