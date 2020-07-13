import React from "react";
import style from "../../css_modules/profile.module.css";

const ProfileEmail = (props) => (

    <div className='col-12 row mx-0 mt-4'>
        <div className='col-3  d-flex justify-content-end align-items-end'>
            <span className={`${style.email}`}>Email:</span>
        </div>
        <div className='col-9 pl-0'>
            <input type='email' className={`${style.emailInput} w-100`}
                   placeholder='helenjohnson@gmail.com'/>
        </div>
    </div>
);

export default ProfileEmail;