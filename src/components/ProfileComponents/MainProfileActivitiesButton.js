import React from "react";
import style from "../../css_modules/profile.module.css";

const ActivitiesButton =(props) => (
    <div className={`${style.profileButton} col-6 d-flex align-items-center`}>
        <span>My Profile</span>
    </div>
);

export default ActivitiesButton;