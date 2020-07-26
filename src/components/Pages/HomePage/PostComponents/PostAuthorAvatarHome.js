import style from "../../../../css_modules/homePage.module.css";
import React from "react";

const PostAuthorAvatar = (props) => (
    <div className='col-2 col-lg-2 pr-0'>
        <img className={`${style.avatarAuthor} `}
             src={require('../../../../images/home_img/logoKuzya.png')}
             alt=''/>
    </div>
);

export default PostAuthorAvatar;