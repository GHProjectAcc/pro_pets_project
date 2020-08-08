import style from "../../../css_modules/homePage.module.css";
import React from "react";
import {store} from "../../../redux/ProPetsStore";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const NavigationSmall = (props) => {
    const path = window.location.pathname;
    return (
        <div className={`${style.navigationContainer} row no-gutters`}>
            <div
                className={`col-7 ${props.display ? style.mainNavigationSmall : style.noDisplay} pr-2  pt-2 `}>

                {/* home button*/}
                <Link to='/home' className={`${path.includes('/home') ? style.navButtonOn : style.navButtonOff} 
                    d-flex align-items-center mt-2`}>
                    <i className="ml-4 mr-3 fa fa-home ">
                    </i>
                    <span>Home</span>
                </Link>

                {/* lost button*/}
                <Link to='/lost' className={`${path.includes('/lost') ? style.navButtonOn : style.navButtonOff} 
                    d-flex align-items-center mt-2`}>
                    <i className="ml-4 mr-3 fa fa-search">
                    </i>
                    <span>Lost</span>
                </Link>

                {/*found button*/}
                <Link to='/found' className={`${path.includes('/found') ? style.navButtonOn : style.navButtonOff} 
                    d-flex align-items-center mt-2`}>
                    <i className="ml-4 mr-3 fa fa-paw ">
                    </i>
                    <span>Found</span>
                </Link>

                {/* vetHelp button*/}
                <Link to='/vethelp' className={`${path.includes('/vethelp') ? style.navButtonOn : style.navButtonOff} 
                    d-flex align-items-center mt-2`}>
                    <i className="ml-4 mr-3 fa fa-stethoscope ">
                    </i>
                    <span>VetHelp</span>
                </Link>

                {/*  hotels button*/}
                <Link to='/hotels' className={`${path.includes('/hotels') ? style.navButtonOn : style.navButtonOff} 
                    d-flex align-items-center mt-2`}>
                    <i className="ml-4 mr-3 fa fa-building ">
                    </i>
                    <span>Hotels</span>
                </Link>

                {/*  walking button*/}
                <Link to='/walking' className={`${path.includes('/walking') ? style.navButtonOn : style.navButtonOff} 
                    d-flex align-items-center mt-2`}>
                    <i className="ml-4 mr-3 fa fa-bullhorn ">
                    </i>
                    <span>Walking</span>
                </Link>

                {/*  fostering button*/}
                <Link to='fostering' className={`${path.includes('/fostering') ? style.navButtonOn : style.navButtonOff} 
                    d-flex align-items-center mt-2`}>
                    <i className="ml-4 mr-3 fa fa-bullhorn ">
                    </i>
                    <span>Fostering</span>
                </Link>

                {/* favorites button*/}
                <Link to='favorites' className={`${path.includes('/favorites') ? style.navButtonOn : style.navButtonOff} 
                    d-flex align-items-center mt-2`}>
                    <i className="ml-4 mr-3 fa fa fa-star ">
                    </i>
                    <span>Favorites</span>
                </Link>
                {/*Line_1*/}
                <div className={`${style.line} mt-5 ml-4`}>
                </div>

                {/*avatar*/}

                <Link to='/profile'
                      className={`${path.includes('/profile') ? style.avatarOn : style.avatarOff} d-flex mt-4 `}>
                    <div className='ml-4 d-inline-block '>
                        <img className={`${style.avatar} `}
                             src={props.user.avatarAuthor}
                             alt=''/>
                    </div>
                    <div
                        className={`${path.includes('/profile') ? style.nameOn : style.nameOff} ml-3  d-inline-block`}>
                        <span>{props.user.name}</span>
                    </div>
                </Link>


                <div className={`${style.nameOff} mt-5 text-center`}>
                    <i className=" mr-2 fa fa-sign-out ">
                    </i>
                    <span>Logout</span>
                </div>

                {/*Line_2*/}
                <div className={`${style.line} mt-3 ml-4`}>
                </div>

            </div>
            {/* NavigationSmallColorSide*/}
            <div
                className={`${props.display ? style.mainNavigationSmallColorSide : style.noDisplay} col-5 px-0`}>
            </div>

        </div>);
};


function mapStateToProps(state) {
    return {
        display: state.displayChange.display,
        user: state.user
    };
}

export default connect(mapStateToProps)(NavigationSmall);