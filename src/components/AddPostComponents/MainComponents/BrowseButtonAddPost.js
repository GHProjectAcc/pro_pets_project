import React from "react";
import style from "../../../css_modules/addPost.module.css";

const BrowseButton = (props) => (
    <div className={`${style.buttonBox} col-4  d-flex`}>
        <div className={`${style.browseButton} `}>
            <input id='file' className={`${style.inputUpload}`} type='file' multiple/>
            <label htmlFor='file' className={`${style.textButton}`}>Browse</label>
        </div>
    </div>
);

export default BrowseButton;