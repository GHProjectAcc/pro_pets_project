import styleFrom from "../../../css_modules/homePage.module.css";
import style from "../../../css_modules/lostPageHeader.module.css";

import React, {useState} from "react";
import {display} from "../../../redux/actions/SmallMediaDropMenuAction";
import {connect} from "react-redux";
import history from "../../../history";


const HeaderLostFound = (props) => {

    const mainNavigationOnClick = () => {
        props.display(!props.changeState)
    };


    return (
        <div className={`${styleFrom.header} row pl-lg-4 align-items-center`}>
            {/* DropMenu for xs-sm media*/}
            <i className={`${style.headerDropMenu} fas fa-bars col-2 text-center`}
                  onClick={mainNavigationOnClick}>
                    </i>

            {/*HeaderLogo & HeaderButton*/}
            <div className={`${style.headerLogo} col-8 col-lg-3`}>
            </div>
            <div className={`${style.arrowButton} col-2`}>
                <i className="fas fa-arrow-down"/>
            </div>
            <div className={`${style.lostFoundButtons} col-2 col-lg-5 offset-lg-4 row`}>
                <div className={`${style.lostPetButton} col-lg-5 offset-lg-1 d-flex align-items-center`}>
                    <i className='fas fa-search pr-2'/>
                    <span>I lost my pet</span>
                </div>
                <div className={`${style.foundPetButton} col-lg-5 offset-lg-1 d-flex align-items-center`}>
                    <i className='fas fa-paw pr-2'/>
                    <span>I found a pet</span>
                </div>
            </div>
        </div>
    );

};

function mapStateToProps(state) {
    return {
        changeState: state.displayChange.display
    };
}

function mapDispatchToProps(dispatch) {
    return {
        display: changeState => dispatch(display(changeState))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLostFound);