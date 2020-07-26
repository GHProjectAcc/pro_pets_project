import style from "../../../../css_modules/homePage.module.css";
import React from "react";
import {connect} from "react-redux";

const PostAuthorName = (props) => {

    return (
        <div className={`${style.postAuthorName} col-6 pl-2`}>
            <span>Name1</span>
            <span className={`${style.postTime} d-block`}>3h</span>
        </div>
    )
};

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(PostAuthorName);