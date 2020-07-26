import style from "../../../css_modules/homePage.module.css";
import React from "react";

const AdRightColumn = (props) => (
    <div className={`${style.targeting} col-lg-1`}>
        <div className={`${style.pic1} mt-lg-3 `}>
        </div>
        <div className={`${style.pic2} mt-lg-3`}>
        </div>
        <div className={`${style.pic3} mt-lg-3 mb-lg-3`}>
        </div>
    </div>
);

export default AdRightColumn;