import style from "../../../css_modules/homePage.module.css";
import React from "react";

const PostAuthorName = (props) => (
    <div className={`${style.postAuthorName} col-6 pl-0`}>
        <span>Name1</span>
        <span className={`${style.postTime} d-block`}>3h</span>
    </div>
);

export default PostAuthorName;