import React from "react";
import style from '../css_modules/homePage.module.css'
import {header, mainCenterColumn, mainNavigation, mainRightColumn} from '../constants/HomePageCostants'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: 'https://www.gravatar.com/avatar/0',
            name: 'Kuzya',
            avatarAuthor: require('../images/home_img/logoKuzya.png'),
            time: '2h',
            posts: [],
            display: false,
            favorites: false
        }
    }

    mainNavigationOnClick = () => {
        this.setState({
            display: !this.state.display
        });
    };

    editFavorites = () => {
        this.setState({
            favorites: !this.state.favorites
        });
    };

    render() {
        const mainNavigationSmall = (
            <div className=' no-gutters'>
                <div className={`col-7 ${this.state.display ? style.mainNavigationSmall : style.noDisplay} pr-3`}>
                    {/* home button*/}
                    <div className={`${style.navButtonHome} d-flex align-items-center mt-4`}>
                        <i className="ml-4 mr-3 fa fa-home ">
                        </i>
                        <span>Home</span>
                    </div>

                    {/* lost button*/}
                    <div className={`${style.navButtonOther} mt-2`}>
                        <i className="ml-4 mr-3 fa fa-search">
                        </i>
                        <span>Lost</span>
                    </div>

                    {/*found button*/}
                    <div className={`${style.navButtonOther}`}>
                        <i className="ml-4 mr-3 fa fa-paw ">
                        </i>
                        <span>Found</span>
                    </div>

                    {/* services button*/}
                    <div className={`${style.navButtonOther} `}>
                        <i className="ml-4 mr-3 fa fa-bullhorn ">
                        </i>
                        <span>Services</span>
                    </div>

                    {/* favorites button*/}
                    <div className={`${style.navButtonOther}`}>
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
                <div className={`${this.state.display ? style.mainNavigationSmallColorSide : style.noDisplay} col-5`}>
                </div>
            </div>);

        return (
            <div className='container '>
                {/*Header row start*/}
                {header}
                {/*end header row*/}

                {/* main row start LEFT*/}
                <div className='row'>
                    {mainNavigation}
                    {mainNavigationSmall}

                    {/* main CENTER*/}
                    {mainCenterColumn}

                    {/* main RIGHT*/}
                    {mainRightColumn}
                </div>
            </div>


        );
    }

}

export default HomePage;