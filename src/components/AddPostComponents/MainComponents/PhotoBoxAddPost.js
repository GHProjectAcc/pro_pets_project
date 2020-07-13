import React from "react";
import style from "../../../css_modules/addPost.module.css";

const PhotoBox = (props) => (
    <div className={`${style.photoBox} px-0  d-flex col-5`}>
        <input id='file' className={`${style.inputUpload}`} type='file' multiple/>
        <label htmlFor='file' className={`${style.photo1Label} mb-0`}>
            <img src={require('../../../images/addPost_img/addPostPhotoBackground.jpg')} className={`${style.photo1} `}
                 alt=''/>
        </label>
        <label htmlFor='file' className={`${style.smallBox}`}>
            <img src={require('../../../images/addPost_img/addPostPhotoBackground_small.jpg')}
                 className={`${style.photo2} `} alt=''/>
            <img src={require('../../../images/addPost_img/addPostPhotoBackground_small.jpg')}
                 className={`${style.photo2}  `} alt=''/>
            <img src={require('../../../images/addPost_img/addPostPhotoBackground_small.jpg')}
                 className={`${style.photo2}  `} alt=''/>
        </label>
    </div>
);

export default PhotoBox;