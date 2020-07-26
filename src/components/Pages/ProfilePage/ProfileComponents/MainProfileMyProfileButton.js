import React from "react";
import style from "../../../../css_modules/profile.module.css";

const MyProfileButton = (props) => (
    <div className={`${style.profileActivities} col-6 d-flex align-items-center`}>
        <span>Activities</span>
    </div>
);

export default MyProfileButton;