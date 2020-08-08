import style from "../../../css_modules/homePage.module.css";
import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class Navigation extends React.Component {


    render() {
        const path = window.location.pathname;
        return (
            <div className={`${style.mainNavigation} col-5 col-lg-3 pr-lg-4 pt-lg-4 pl-0`}>

                {/* home button*/}
                <Link to='/home'
                      className={`${path.includes('/home') ? style.navButtonOn : style.navButtonOff} 
                    d-flex align-items-center mt-3 current`}>
                    <i className="ml-lg-4 mr-lg-3 fa fa-home"/>
                    <span>Home</span>
                </Link>

                {/* lost button*/}
                <Link to='/lost'
                      className={`${path.includes('/lost') ? style.navButtonOn : style.navButtonOff} d-flex align-items-center mt-3`}>
                    <i className="ml-lg-4 mr-lg-3 fa fa-search"/>
                    <span>Lost</span>
                </Link>

                {/*found button*/}
                <Link to='/found'
                      className={`${path.includes('/found') ? style.navButtonOn : style.navButtonOff} 
                d-flex align-items-center mt-3`}>
                    <i className="ml-lg-4 mr-lg-3 fa fa-paw "/>
                    <span>Found</span>
                </Link>

                {/* services button*/}
                <Link to='/services' className={`${path.includes('/services') ? style.navButtonOn : style.navButtonOff} 
                d-flex align-items-center mt-3`}>
                    <i className="ml-lg-4 mr-lg-3 fa fa-bullhorn"/>
                    <span>Services</span>
                </Link>

                {/* favorites button*/}
                <Link to='/favorites'
                      className={`${path.includes('/favorites') ? style.navButtonOn : style.navButtonOff} 
                d-flex align-items-center mt-3 mb-lg-5`}
                    /*onClick={() => {
                        history.push('/favorites')
                    }}*/>
                    <i className="ml-lg-4 mr-lg-3 fa fa fa-star "/>
                    <span>Favorites</span>
                </Link>
                {/*Line_1*/}
                <div className={`${style.line}  ml-lg-4`}>
                </div>

                {/*avatar*/}
                <Link to='/profile'
                      className={`${path.includes('/profile') ? style.avatarOn : style.avatarOff} d-flex mt-lg-4 `}>
                    <div className='ml-lg-4 d-lg-inline-block '>
                        <img className={`${style.avatar} `}
                             src={this.props.user.avatarAuthor}
                             alt=''/>
                    </div>
                    <div className={`${path.includes('/profile') ? style.nameOn : style.nameOff} ml-lg-3  d-lg-inline-block`}>
                        <span className={`${style.noDecoration}`}>{this.props.user.name}</span>
                    </div>
                </Link>


                <div className={`${style.nameOff} mt-lg-5   text-center`}>
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