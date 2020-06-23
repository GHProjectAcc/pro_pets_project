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
                {/*Header row start*/}
                <div className={`${style.header} row pr-lg-1`}>
                    {/* DropMenu for xs-sm media*/}
                    <div className={`${style.headerDropMenu} dropdown col-2`}>
                        <span className="fa fa-bars "
                              data-toggle="dropdown">
                        </span>
                        <div className={`${style.downMenu} dropdown-menu dropdown-menu-right`}>
                            <button className={`${style.downMenuText} dropdown-item d-lg-inline-block`}>
                                <i className={`${style.faMenu} fa fa-eye-slash  mr-lg-1`}>
                                </i>
                                <span>Hide from feed</span>
                            </button>
                        </div>
                    </div>
                    {/*HeaderLogo & HeaderButton*/}
                    <div className={`${style.headerLogo} col-5 col-lg-2 offset-lg-0`}>
                    </div>
                    <button className={`col-2 offset-3 col-lg-2 offset-lg-8 text-left ${style.headerButton}`}>
                        <i className="fa fa-plus mr-lg-5">
                        </i>
                        <span className={`${style.headerButtonText}`}>Add new</span>
                    </button>
                </div>
                {/*end header row*/}

                {/* main row start LEFT*/}
                <div className='row'>
                    <div className={`col-lg-3 ${style.mainNavigation} pr-lg-5`}>

                        {/* home button*/}
                        <div className={`${style.navButtonHome} d-flex align-items-center mt-lg-4`}>
                            <i className="ml-lg-4 mr-lg-3 fa fa-home ">
                            </i>
                            <span>Home</span>
                        </div>

                        {/* lost button*/}
                        <div className={`${style.navButtonOther} mt-lg-2`}>
                            <i className="ml-lg-4 mr-lg-3 fa fa-search">
                            </i>
                            <span>Lost</span>
                        </div>

                        {/*found button*/}
                        <div className={`${style.navButtonOther}`}>
                            <i className="ml-lg-4 mr-lg-3 fa fa-paw ">
                            </i>
                            <span>Found</span>
                        </div>

                        {/* services button*/}
                        <div className={`${style.navButtonOther} `}>
                            <i className="ml-lg-4 mr-lg-3 fa fa-bullhorn ">
                            </i>
                            <span>Services</span>
                        </div>

                        {/* favorites button*/}
                        <div className={`${style.navButtonOther}`}>
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
                                 src={this.state.avatar}
                                 alt=''/>
                        </div>
                        <div className={`${style.name} ml-lg-3 mt-lg-4 d-lg-inline-block`}>
                            <span>{this.state.name}</span>
                        </div>

                        <div className={`${style.name} mt-lg-5  ml-lg-5`}>
                            <i className=" mr-lg-2 fa fa-sign-out ">
                            </i>
                            <span>Logout</span>
                        </div>

                        {/*Line_2*/}
                        <div className={`${style.line} mt-3 ml-lg-4`}>
                        </div>

                    </div>


                    {/* main CENTER*/}
                    <div className='col-12 col-lg-8 pt-2'>

                        {/* Post1*/}
                        <div className={`${style.post} mt-3 pl-pr-1 container`}>
                            <div className='pt-2 row'>
                                {/*AuthorAvatar*/}
                                <div className='col-2 pr-0'>
                                    <img className={`${style.avatarAuthor} `}
                                         src={this.state.avatarAuthor}
                                         alt=''/>
                                </div>

                                {/*AuthorName*/}
                                <div className={`${style.postAuthorName} col-5 col-lg-4 pl-0`}>
                                    <span>{this.state.name}</span>
                                    <span className={`${style.postTime} d-block`}>{this.state.time}</span>
                                </div>

                                {/*   DropMenu*/}
                                <div className="dropdown  col-1 offset-4 pr-2 pl-0 pl-lg-3 col-lg-1 offset-lg-5  ">
                                    <span className={`${style.postDropMenu}`}
                                          data-toggle="dropdown">
                                       ...
                                    </span>
                                    <div className={`${style.downMenu} dropdown-menu dropdown-menu-right`}>

                                        <button className={`${style.downMenuText} dropdown-item d-lg-inline-block`}>
                                            <i className={`${style.faMenu} fa fa-eye-slash  mr-lg-1`}>
                                            </i>
                                            <span>Hide from feed</span>
                                        </button>
                                        <button className={`${style.downMenuText} dropdown-item d-lg-inline-block`}>
                                            <i className={`${style.faMenu} fa fa fa-times  mr-lg-1`}>
                                            </i>
                                            <span>Unfollow</span>
                                        </button>
                                        <button className={`${style.downMenuText} dropdown-item d-lg-inline-block`}>
                                            <i className={`${style.faMenu} fa fa-pencil  mr-lg-1`}>
                                            </i>
                                            <span>Edit</span>
                                        </button>
                                        <button className={`${style.downMenuText} dropdown-item d-lg-inline-block`}>
                                            <i className={`${style.faMenu} fa fa-trash mr-lg-1`}>
                                            </i>
                                            <span>Remove</span>
                                        </button>
                                    </div>
                                </div>
                            </div>


                            {/*Content*/}
                            <div className='row pt-2'>
                                <div className='col-11 pl-3 col-lg-9 offset-lg-2 pl-lg-0'><p
                                    className={`${style.postText}`}>Lorem
                                    ipsum dolor sit amet,
                                    consectetur adipisicing
                                    elit.
                                    Eum, iusto, labore. Eligendi iusto, labore magni rerum sunt veniam?
                                    Aspernatur debitis delectus est labore molestias natus!
                                    A assumenda debitis in saepe.</p>
                                </div>
                                <div className='col-1  col-lg-1 pb-4 pl-0 pl-lg-3 d-flex align-items-end'>
                                     <span
                                         className={`${style.favorites} fa fa-star-o`}>
                                    </span>
                                </div>

                            </div>
                        </div>

                        {/*Post2*/}
                        <div className={`${style.post} mt-3`}>

                            <div className='pt-lg-2 row'>
                                {/*AuthorAvatar*/}
                                <div className='col-lg-1'>
                                    <img className={`${style.avatarAuthor} `}
                                         src={this.state.avatarAuthor}
                                         alt=''/>
                                </div>

                                {/*AuthorName*/}
                                <div className={`${style.postAuthorName} col-lg-2 `}>
                                    <span>{this.state.name}</span>
                                    <span className={`${style.postTime} d-block`}>{this.state.time}</span>
                                </div>

                                {/*   DropMenu*/}
                                <div className="dropdown  col-lg-1 offset-lg-8">
                                    <span className={`${style.postDropMenu}`}
                                          data-toggle="dropdown">
                                       ...
                                    </span>
                                    <div className={`${style.downMenu} dropdown-menu dropdown-menu-right`}>

                                        <button className={`${style.downMenuText} dropdown-item d-lg-inline-block`}>
                                            <i className={`${style.faMenu} fa fa-eye-slash  mr-lg-1`}>
                                            </i>
                                            <span>Hide from feed</span>
                                        </button>
                                        <button className={`${style.downMenuText} dropdown-item d-lg-inline-block`}>
                                            <i className={`${style.faMenu} fa fa fa-times  mr-lg-1`}>
                                            </i>
                                            <span>Unfollow</span>
                                        </button>
                                        <button className={`${style.downMenuText} dropdown-item d-lg-inline-block`}>
                                            <i className={`${style.faMenu} fa fa-pencil  mr-lg-1`}>
                                            </i>
                                            <span>Edit</span>
                                        </button>
                                        <button className={`${style.downMenuText} dropdown-item d-lg-inline-block`}>
                                            <i className={`${style.faMenu} fa fa-trash mr-lg-1`}>
                                            </i>
                                            <span>Remove</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Image*/}
                            <div className='row mt-lg-3 pl-lg-3'>
                                <div className={`${style.postImage} col-lg-10 offset-lg-1`}>
                                </div>
                            </div>

                            {/*Content*/}
                            <div className='pt-lg-2 row'>
                                <p className={`${style.postText} col-lg-9 offset-lg-1`}>Lorem ipsum dolor sit amet,
                                    consectetur adipisicing
                                    elit.
                                    Eum, iusto, labore. Eligendi iusto, labore magni rerum sunt veniam?
                                    Aspernatur debitis delectus est labore molestias natus!
                                    A assumenda debitis in saepe.
                                </p>


                                <span
                                    className={`${style.favorites}  fa fa-star-o col-lg-1 offset-lg-1 d-flex align-items-lg-end mb-lg-3`}>
                                    </span>


                            </div>
                        </div>
                    </div>

                    {/* main RIGHT*/}
                    <div className={`${style.targeting} col-lg-1`}>
                        <div className={`${style.pic1} mt-lg-3 `}>
                        </div>
                        <div className={`${style.pic2} mt-lg-3`}>
                        </div>
                        <div className={`${style.pic3} mt-lg-3 mb-lg-3`}>
                        </div>
                    </div>
                </div>
            </div>


        );
    }

}

export default HomePage;