import React from "react";
import style from "../../css_modules/profile.module.css";

const ProfileFBLink = (props) => (
    <div className='col-12 row mx-0 mt-2'>
        <div className='col-3  d-flex justify-content-end align-items-end'>
            <span className={`${style.email}`}>FBLink:</span>
        </div>
        <div className='col-9 pl-0'>
            <input className={`${style.emailInput} w-100`}
                   placeholder='https://www.facebook.com/anna.smith908430'/>
        </div>
    </div>
);

export default ProfileFBLink;