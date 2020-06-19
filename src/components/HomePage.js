import React from "react";
import style from '../css_modules/homePage.module.css'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: 'https://www.gravatar.com/avatar/0',
            name: 'Kuzya',
            avatarAuthor: 'https://www.gravatar.com/avatar/monsterid',
            time: '2h',
            posts: []
        }
    }

    render() {
        return (
            <div className='container'>
                {/*header row start*/}
                <div className={`row pr-lg-1  ${style.header}`}>
                    <div className={`col-lg-2 ${style.headerLogo}`}>
                    </div>
                    <button className={`col-lg-2 offset-lg-8 mt-lg-3 ${style.headerButton}`}>
                        <span className='pr-lg-4'>+</span>
                        <span className=''>Add new</span>
                    </button>
                </div>
                {/*end header row*/}

                {/* main row start LEFT*/}
                <div className='row '>
                    <div className={`col-lg-2 ${style.mainNavigation}`}>

                        {/* home button*/}
                        <div className={`${style.navButtonHome}`}>
                            <i className="ml-lg-3 mr-lg-3 fa fa-home fa-fw">
                            </i>
                            <span>Home</span>
                        </div>

                        {/* lost button*/}
                        <div className={`${style.navButtonOther}`}>
                            <i className="ml-lg-3 mr-lg-3 fa fa-search fa-fw">
                            </i>
                            <span>Lost</span>
                        </div>

                        {/*found button*/}
                        <div className={`${style.navButtonOther}`}>
                            <i className="ml-lg-3 mr-lg-3 fa fa-paw fa-fw">
                            </i>
                            <span>Found</span>
                        </div>

                        {/* services button*/}
                        <div className={`${style.navButtonOther}`}>
                            <i className="ml-lg-3 mr-lg-3 fa fa-bullhorn fa-fw">
                            </i>
                            <span>Services</span>
                        </div>

                        {/* favorites button*/}
                        <div className={`${style.navButtonOther}`}>
                            <i className="ml-lg-3 mr-lg-3 fa fa fa-star fa-fw">
                            </i>
                            <span>Favorites</span>
                        </div>
                        <div className={`${style.line} mt-lg-6 ml-lg-3`}>
                        </div>

                        {/*avatar*/}
                        <div className='mt-lg-5 ml-lg-4 d-lg-inline-block'>
                            <img className={`${style.avatar} `}
                                 src={this.state.avatar}
                                 alt=''/>
                        </div>
                        <div className={`${style.name} ml-lg-3 mt-lg-4 d-lg-inline-block`}>
                            <span>{this.state.name}</span>
                        </div>
                    </div>


                    {/* main Center*/}
                    <div className='col-lg-8 pt-lg-1'>

                        {/* Post*/}
                        <div className={`${style.post} pt-lg-2 pl-lg-2 `}>
                            <div className='row pl-lg-2 pt-lg-2'>
                                {/*AuthorAvatar*/}
                                <div className='col-lg-1'>
                                    <img className={`${style.avatar} `}
                                         src={this.state.avatarAuthor}
                                         alt=''/>
                                </div>

                                {/*AuthorName*/}
                                <div className={`${style.postAuthorName} col-lg-2 `}>
                                    <span>{this.state.name}</span>
                                    <span className={`${style.postTime} d-block`}>
                                {this.state.time}
                            </span>
                                </div>

                                {/*   DropMenu*/}
                                <div className='col-lg-1 offset-lg-8 dropdown-menu-right'>
                                    <span className={`${style.postDropMenu} `}>...</span>
                                </div>
                            </div>

                            {/*Content*/}
                            <div className='row pl-lg-2 pt-lg-2'>
                                <p className={`${style.postText} col-lg-10 offset-lg-1`}>Lorem ipsum dolor sit amet,
                                    consectetur adipisicing
                                    elit.
                                    Eum, iusto, labore. Eligendi iusto, labore magni rerum sunt veniam?
                                    Aspernatur debitis delectus est labore molestias natus!
                                    A assumenda debitis in saepe.
                                </p>

                                <i className={`${style.favorites} fa fa-star-o col-lg-1 pt-lg-4 mt-lg-5`}>
                                </i>
                            </div>
                        </div>
                    </div>

                    {/* main Right*/}
                    <div className={`${style.targeting} col-lg-2`}>
                        <div className={`${style.pic1} mt-lg-2`}>
                        </div>
                        <div className={`${style.pic2} mt-lg-2`}>
                        </div>
                        <div className={`${style.pic3} mt-lg-2`}>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default HomePage;