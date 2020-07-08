import style from "../../css_modules/homePage.module.css";
import React from "react";


const HeaderAddPost = (props) => {
    return (
        <div className={`${style.header} row pl-lg-4 align-items-center`}>
            {/* DropMenu for xs-sm media*/}
            <span className={`${style.headerDropMenu} fa fa-bars col-2 text-center`}
                /* onClick={mainNavigationOnClick}*/>
                    </span>

            {/*HeaderLogo */}
            <div className={`${style.headerLogo} col-5 col-lg-2`}>
            </div>
        </div>)
};

export default HeaderAddPost;