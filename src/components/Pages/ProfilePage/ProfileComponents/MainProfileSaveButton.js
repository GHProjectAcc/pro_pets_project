import React from "react";
import style from "../../../../css_modules/profile.module.css";

const SaveButton = () => (
    <div className='col-12 row mx-0 mt-5'>
        <div className={`${style.saveButton} col-9 offset-3 d-flex`}>
            <i className="fas fa-save"/>
            <span>Save changes</span>
        </div>
    </div>
);

export default SaveButton;