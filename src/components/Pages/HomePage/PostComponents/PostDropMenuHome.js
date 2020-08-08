import style from "../../../../css_modules/homePage.module.css";
import React from "react";

const PostDropMenu = (props) => (
    <div className="dropdown col-1 offset-3 pr-3 pl-0  col-lg-1 offset-lg-5">
        <div className={`${style.postDropMenu} `}
             data-toggle="dropdown">
            <span>...</span>
        </div>
        <div className={`${style.downMenu} dropdown-menu dropdown-menu-right `}>

            <button className={`${style.downMenuText} dropdown-item `}>
                <i className={`${style.faMenu} fa fa-eye-slash  mr-2`}>
                </i>
                <span>Hide from feed</span>
            </button>
            <button className={`${style.downMenuText} dropdown-item `}>
                <i className={`${style.faMenu} fa fa fa-times  mr-2`}>
                </i>
                <span>Unfollow</span>
            </button>
            <button className={`${style.downMenuText} dropdown-item `}>
                <i className={`${style.faMenu} fa fa-pencil  mr-2`}>
                </i>
                <span>Edit</span>
            </button>
            <button className={`${style.downMenuText} dropdown-item `}>
                <i className={`${style.faMenu} fa fa-trash mr-2`}>
                </i>
                <span>Remove</span>
            </button>
        </div>
    </div>
);
export default PostDropMenu;