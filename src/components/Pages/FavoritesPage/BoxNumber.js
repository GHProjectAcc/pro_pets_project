import React from "react";
import style from "../../../css_modules/pagination.module.css";

const BoxNumber = (props) => {

    console.log(props.value)
    return (
        <div className={`${style.boxNumber} d-inline-block`}>
            <span>{props.value}</span>
        </div>
    );
};

export default BoxNumber;