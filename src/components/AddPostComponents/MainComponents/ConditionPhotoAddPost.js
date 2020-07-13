import React from "react";
import style from "../../../css_modules/addPost.module.css";

const ConditionPhoto = (props) => (
    <div className={`col-2 pl-0`}>
                        <span className={`${style.span1} d-block`}>
                            Photos:
                        </span>
        <span className={`${style.span2} d-block pl-0`}>
                            up to 4 images
                        </span>
    </div>
);

export default ConditionPhoto;