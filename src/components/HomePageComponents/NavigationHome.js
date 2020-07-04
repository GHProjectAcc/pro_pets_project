import style from "../../css_modules/homePage.module.css";
import React from "react";
import {connect} from "react-redux";

class Navigation extends React.Component {


    render() {
        const path = window.location.pathname;
        return (
            <div className={`col-5 col-lg-3 ${style.mainNavigation} pr-lg-5 pt-lg-3`}>

                {/* home button*/}
                <div
                    className={`${path.includes('/home') ? style.navButtonOn : style.navButtonOff} 
                    d-flex align-items-center mt-2`}>
                    <i className="ml-lg-4 mr-lg-3 fa fa-home ">
                    </i>
                    <span>Home</span>
                </div>

                {/* lost button*/}
                <div
                    className={`${path.includes('/lost') ? style.navButtonOn : style.navButtonOff} d-flex align-items-center mt-lg-2`}>
                    <i className="ml-lg-4 mr-lg-3 fa fa-search">
                    </i>
                    <span>Lost</span>
                </div>

                {/*found button*/}
                <div
                    className={`${path.includes('/found') ? style.navButtonOn : style.navButtonOff} d-flex align-items-center mt-lg-2`}>
                    <i className="ml-lg-4 mr-lg-3 fa fa-paw ">
                    </i>
                    <span>Found</span>
                </div>

                {/* services button*/}
                <div
                    className={`${path.includes('/services') ? style.navButtonOn : style.navButtonOff} d-flex align-items-center mt-lg-2`}>
                    <i className="ml-lg-4 mr-lg-3 fa fa-bullhorn ">
                    </i>
                    <span>Services</span>
                </div>

                {/* favorites button*/}
                <div
                    className={`${path.includes('/favorites') ? style.navButtonOn : style.navButtonOff} d-flex align-items-center mt-lg-2`}>
                    <i className="ml-lg-4 mr-lg-3 fa fa fa-star ">
                    </i>
                    <span>Favorites</span>
                </div>
                {/*Line_1*/}
                <div className={`${style.line} mt-lg-5 ml-lg-4`}>
                </div>

                {/*avatar*/}
                <div className='mt-lg-4 ml-lg-4 d-lg-inline-block'>
                    <img className={`${style.avatar} `}
                         src={this.props.user.avatar}
                         alt=''/>
                </div>
                <div className={`${style.name} ml-lg-3 mt-lg-4 d-lg-inline-block`}>
                    <span>{this.props.user.name}</span>
                </div>

                <div className={`${style.name} mt-lg-5  ml-lg-5`}>
                    <i className=" mr-lg-2 fa fa-sign-out ">
                    </i>
                    <span>Logout</span>
                </div>

                {/*Line_2*/}
                <div className={`${style.line} mt-3 ml-lg-4`}>
                </div>

            </div>)
    }
}


function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Navigation);