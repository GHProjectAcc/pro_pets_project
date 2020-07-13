import style from "../../css_modules/homePage.module.css";
import React from "react";
import {store} from "../../store/ProPetsStore";
import {connect} from "react-redux";

class NavigationSmall extends React.Component {


    render() {
        const path = window.location.pathname;
        return (
            <div>
                <div
                    className={`col-7 ${this.props.display ? style.mainNavigationSmall : style.noDisplay} pr-4 pt-2 pl-0`}>

                    {/* home button*/}
                    <div className={`${path.includes('/home') ? style.navButtonOn : style.navButtonOff} 
                    d-flex align-items-center mt-2`}>
                        <i className="ml-4 mr-3 fa fa-home ">
                        </i>
                        <span>Home</span>
                    </div>

                    {/* lost button*/}
                    <div className={`${path.includes('/lost') ? style.navButtonOn : style.navButtonOff} 
                    d-flex align-items-center mt-2`}>
                        <i className="ml-4 mr-3 fa fa-search">
                        </i>
                        <span>Lost</span>
                    </div>

                    {/*found button*/}
                    <div className={`${path.includes('/found') ? style.navButtonOn : style.navButtonOff} 
                    d-flex align-items-center mt-2`}>
                        <i className="ml-4 mr-3 fa fa-paw ">
                        </i>
                        <span>Found</span>
                    </div>

                    {/* vetHelp button*/}
                    <div className={`${path.includes('/vethelp') ? style.navButtonOn : style.navButtonOff} 
                    d-flex align-items-center mt-2`}>
                        <i className="ml-4 mr-3 fa fa-stethoscope ">
                        </i>
                        <span>VetHelp</span>
                    </div>

                    {/*  hotels button*/}
                    <div className={`${path.includes('/hotels') ? style.navButtonOn : style.navButtonOff} 
                    d-flex align-items-center mt-2`}>
                        <i className="ml-4 mr-3 fa fa-building ">
                        </i>
                        <span>Hotels</span>
                    </div>

                    {/*  walking button*/}
                    <div className={`${path.includes('/walking') ? style.navButtonOn : style.navButtonOff} 
                    d-flex align-items-center mt-2`}>
                        <i className="ml-4 mr-3 fa fa-bullhorn ">
                        </i>
                        <span>Walking</span>
                    </div>

                    {/*  fostering button*/}
                    <div className={`${path.includes('/fostering') ? style.navButtonOn : style.navButtonOff} 
                    d-flex align-items-center mt-2`}>
                        <i className="ml-4 mr-3 fa fa-bullhorn ">
                        </i>
                        <span>Fostering</span>
                    </div>

                    {/* favorites button*/}
                    <div className={`${path.includes('/favorites') ? style.navButtonOn : style.navButtonOff} 
                    d-flex align-items-center mt-2`}>
                        <i className="ml-4 mr-3 fa fa fa-star ">
                        </i>
                        <span>Favorites</span>
                    </div>
                    {/*Line_1*/}
                    <div className={`${style.line} mt-5 ml-4`}>
                    </div>

                    {/*avatar*/}

                    <div className={`${path.includes('/profile') ? style.avatarOn : style.avatarOff} d-flex mt-4 `}>
                        <div className='ml-4 d-inline-block '>
                            <img className={`${style.avatar} `}
                                 src={this.props.user.avatarAuthor}
                                 alt=''/>
                        </div>
                        <div
                            className={`${path.includes('/profile') ? style.nameOn : style.nameOff} ml-3  d-inline-block`}>
                            <span>{this.props.user.name}</span>
                        </div>
                    </div>


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
                    className={`${this.props.display ? style.mainNavigationSmallColorSide : style.noDisplay} col-5 `}>
                </div>

            </div>);
    }
}

function mapStateToProps(state) {
    return {
        display: state.displayChange.display,
        user: state.user
    };
}

export default connect(mapStateToProps)(NavigationSmall);