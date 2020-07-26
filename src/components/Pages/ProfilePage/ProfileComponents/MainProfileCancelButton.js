import React from "react";
import style from "../../../../css_modules/profile.module.css";

const CancelButton = () => (
    <div className='col-12 row mx-0 mt-3 mb-5'>
        <div className={`${style.cancelButton} col-9 offset-3 d-flex`}>
            <span>Cancel</span>
        </div>
    </div>
);

export default CancelButton;