import React from "react";
import style from "../../css_modules/profile.module.css";

const Title = () => (
    <div className={`${style.title} col-12 pt-4 pl-2`}>
        <span className='font-weight-bold'>Your profile. </span>
        <span>Change, edit and manage your data.</span>
    </div>
);

export default Title;