import style from "../../css_modules/homePage.module.css";
import React from "react";
import {display} from "../../redux/actions/SmallMediaDropMenuAction";
import {connect} from "react-redux";
import history from "../../history";

const Header = (props) => {

    const mainNavigationOnClick = () => {
        props.display(!props.changeState)
    };


    return (
        <div className={`${style.header} row pl-lg-4 align-items-center`}>
            {/* DropMenu for xs-sm media*/}
            <span className={`${style.headerDropMenu} fa fa-bars col-2 text-center`}
                  onClick={mainNavigationOnClick}>
                    </span>

            {/*HeaderLogo & HeaderButton*/}
            <div className={`${style.headerLogo} col-5 col-lg-2`}>
            </div>
            <div className={`col-2 offset-3 col-lg-2 offset-lg-8 align-items-center d-flex ${style.headerButton}`}
                 onClick={() => {
                     history.push('/addpost')
                 }}>
                <i className="fa fa-plus mr-lg-4 ">
                </i>
                <span className={`${style.headerButtonText}`}>Add new</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);