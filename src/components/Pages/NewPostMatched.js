import React from "react";
import style from "../../css_modules/homePage.module.css";
import Post from "./HomePage/PostComponents/PostHome";

class NewPostMatched extends React.Component {


    render() {
        return (
            <div className='container mt-5'>

                    <div className={`${style.header} row pl-lg-4 align-items-center`}>

                        {/*HeaderLogo & HeaderButton*/}
                        <div className={`${style.headerLogo} col-5 col-lg-2`}>
                        </div>
                        <div
                            className={`col-2 offset-3 col-lg-2 offset-lg-8 align-items-center d-flex ${style.headerButton}`}>
                            {/*<i className="fa fa-plus mr-lg-4 ">
                        </i>
                        <span className={`${style.headerButtonText}`}>Add new</span>*/}
                        </div>
                    </div>
                    <div className='row'>
                        <div className={`${style.targeting} col-lg-2`}>
                        </div>

                        <div className={`col-12 col-lg-8 pt-2`}>
                            {/* Post1*/}
                            <Post/>
                        </div>
                        <div className={`${style.targeting} col-lg-2`}>
                        </div>
                    </div>
                </div>

        );
    }
}

export default NewPostMatched;