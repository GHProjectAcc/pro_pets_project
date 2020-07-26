import React from "react";
import style from "../../../../css_modules/addPost.module.css";

const ConditionText = (props) => (
    <div className={`col-lg-2 pl-0`}>
                        <span className={`${style.span1} d-block`}>
                            Text:
                        </span>
        <span className={`${style.span2} d-block pl-0`}>
                            up to 1500 char
                        </span>
    </div>
);

export default ConditionText;