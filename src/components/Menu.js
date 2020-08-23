import React, {useEffect} from "react";
import style from "../css_modules/dropMenu.module.css";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getUserInformationFetch} from "../redux/actions/UserInformationActions";

const Menu = (props) => {
    const initialPageNumber = 1;
/*    const path = window.location.pathname;
    console.log(path);
    console.log(path.includes(`/favorites`));
    console.log(path.includes(`/home`));*/

    useEffect(() => {
        const fetchData = async () => {
            props.getUser()
        };
        fetchData();
    }, []);

    return (
        <div className={`${style.menu} col-lg-3 pr-3`}>
            <Link to={`/home/${initialPageNumber}`}
                  className={`${props.path.includes('/home') ? style.navButtonOn : style.navButtonOff} d-flex align-items-center mt-4 mb-2`}>
                <i className='fas fa-home ml-5 mr-3'/>
                <span>Home</span>
            </Link>

            <Link to={`/lost/${initialPageNumber}`}
                  className={`${props.path.includes('/lost') ? style.navButtonOn : style.navButtonOff} d-flex align-items-center mb-2`}>
                <i className='fas fa-search  ml-5 mr-3'/>
                <span>Lost</span>
            </Link>

            <Link to={`/found/${initialPageNumber}`}
                  className={`${props.path.includes('/found') ? style.navButtonOn : style.navButtonOff} d-flex align-items-center mb-2`}>
                <i className='fas fa-paw  ml-5 mr-3'/>
                <span>Found</span>
            </Link>

            <Link to='/services'
                  className={`${props.path.includes('/services') ? style.navButtonOn : style.navButtonOff} d-flex align-items-center mb-2`}>
                <i className='fas fa-bullhorn ml-5  mr-3'/>
                <span>Services</span>
            </Link>

            <Link to={`/favorites/${initialPageNumber}`}
                  className={`${props.path.includes(`/favorites`) ? style.navButtonOn : style.navButtonOff} d-flex align-items-center mb-5`}>
                <i className='fas fa-star ml-5  mr-3'/>
                <span>Favorites</span>
            </Link>

            {/* <Link to='/vethelp'
                      className={`${path.includes('/vethelp') ? style.navButtonOn : style.navButtonOff} d-flex align-items-center mb-2 `}>
                    <i className='fas fa-stethoscope ml-5  mr-3'/>
                    <span>VetHelp</span>
                </Link>

                <Link to='/hotels'
                      className={`${path.includes('/hotels') ? style.navButtonOn : style.navButtonOff} d-flex align-items-center mb-2`}>
                    <i className='fas fa-building ml-5  mr-3'/>
                    <span>Hotels</span>
                </Link>

                <Link to='/walking'
                      className={`${path.includes('/walking') ? style.navButtonOn : style.navButtonOff} d-flex align-items-center mb-2`}>
                    <i className='fas fa-bullhorn ml-5  mr-3'/>
                    <span>Walking</span>
                </Link>

                <Link to='/fostering'
                      className={`${path.includes('/fostering') ? style.navButtonOn : style.navButtonOff} d-flex align-items-center mb-2`}>
                    <i className='fas fa-dog ml-5  mr-3'/>
                    <span>Fostering</span>
                </Link>*/}

            <div className={`${style.line} mt-lg-3 mb-lg-1 ml-lg-5`}/>

            <Link to='/profile'
                  className={`${props.path.includes('/profile') ? style.avatarOn : style.avatarOff} d-flex my-5`}>
                <img className={`${style.avatar} ml-4 ml-md-5 mr-3`}
                     src={require('../images/home_img/logoKuzya.png')}
                     alt=''/>
                <div className={`${props.path.includes('/profile') ? style.nameOn : style.nameOff}`}>
                    <span className={`${style.noDecoration} pr-2`}>{props.user.name}</span>
                </div>
            </Link>


            <div className={`${style.nameOff} mt-lg-5 mb-lg-5 text-center`}>
                <i className="fas fa-sign-out-alt mr-lg-3"/>
                <span>Logout</span>
            </div>

            {/*Line_2*/}
            <div className={`${style.line} mt-lg-3 mb-lg-1 ml-lg-5`}/>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        user: state.user.user
    }
}

const mapDispatchToProps = dispatch => ({
    getUser: () => dispatch(getUserInformationFetch())
});


export default connect(mapStateToProps, mapDispatchToProps)(Menu);