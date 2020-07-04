import style from "../../css_modules/homePage.module.css";
import React from "react";
import {store} from "../../store/ProPetsStore";
import {connect} from "react-redux";

class NavigationSmall extends React.Component {


    render() {

        return (
            <div >
                <div className={`col-7 ${this.props.display ? style.mainNavigationSmall : style.noDisplay} pr-3`}>
                    {/* home button*/}
                    <div className={`${style.navButtonOn} d-flex align-items-center mt-4`}>
                        <i className="ml-4 mr-3 fa fa-home ">
                        </i>
                        <span>Home</span>
                    </div>

                    {/* lost button*/}
                    <div className={`${style.navButtonOff} mt-2`}>
                        <i className="ml-4 mr-3 fa fa-search">
                        </i>
                        <span>Lost</span>
                    </div>

                    {/*found button*/}
                    <div className={`${style.navButtonOff}`}>
                        <i className="ml-4 mr-3 fa fa-paw ">
                        </i>
                        <span>Found</span>
                    </div>

                    {/* services button*/}
                    <div className={`${style.navButtonOff} `}>
                        <i className="ml-4 mr-3 fa fa-bullhorn ">
                        </i>
                        <span>Services</span>
                    </div>

                    {/* favorites button*/}
                    <div className={`${style.navButtonOff}`}>
                        <i className="ml-4 mr-3 fa fa fa-star ">
                        </i>
                        <span>Favorites</span>
                    </div>
                    {/*Line_1*/}
                    <div className={`${style.line} mt-5 ml-4`}>
                    </div>

                    {/*avatar*/}
                    <div className='mt-4 ml-4 d-inline-block'>
                        <img className={`${style.avatar} `}
                            /*src={this.state.avatar}*/
                             alt=''/>
                    </div>
                    <div className={`${style.name} ml-3 mt-4 d-inline-block`}>
                        <span>Name</span>
                    </div>

                    <div className={`${style.name} mt-5  ml-5`}>
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
        display: state.displayChange.display
    };
}

export default connect(mapStateToProps)(NavigationSmall);