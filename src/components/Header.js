import React from "react";
import style from "../css_modules/favorites.module.css";

const Header = (props) => {


    return (
        <div className='row'>
            <div className={`${style.header} col-12`}>
                <div className='row h-100 align-items-center'>
                    <div className='col-2 col-md-1 d-flex d-lg-none justify-content-center align-items-center'>
                        <i className="fas fa-bars" onClick={props.showDropMenu}/>
                    </div>
                    <div className='col-5 col-md-3 pt-md-2 px-0 pl-lg-5'>
                        <div className={`${style.headerLogo} `}/>
                    </div>
                    <div className='offset-3 col-2 d-flex d-md-none justify-content-center align-items-center'>
                        <i className="fas fa-plus"/>
                    </div>
                    <div className='col-md-3 offset-md-5 offset-lg-6 pl-md-4 pl-lg-5 d-none d-md-block'>
                        <div className={`${style.addPostButton} d-flex align-items-center ml-xl-4`}>
                            <i className="fas fa-plus pl-md-3 pr-md-4"/>
                            <span>Add new</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;