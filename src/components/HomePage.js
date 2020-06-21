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
                <div className={`${style.header} row pr-lg-1`}>
                    <div className={`${style.headerLogo} col-md-3 offset-md-1 col-lg-2 offset-lg-0`}>
                    </div>
                    <button className={`col-md-3 offset-md-5 col-lg-2 offset-lg-8 text-left ${style.headerButton}`}>
                        <i className="fa fa-plus fa-fw mr-lg-5">
                        </i>
                        <span className={`${style.addButtonText}`}>Add new</span>
                    </button>
                </div>
                {/*end header row*/}

                {/* main row start LEFT*/}
                <div className='row'>
                    <div className={`col-lg-3 ${style.mainNavigation} pr-lg-5`}>

                        {/* home button*/}
                        <div className={`${style.navButtonHome} d-flex align-items-center mt-lg-4`}>
                            <i className="ml-lg-4 mr-lg-3 fa fa-home fa-fw">
                            </i>
                            <span>Home</span>
                        </div>

                        {/* lost button*/}
                        <div className={`${style.navButtonOther} mt-lg-2`}>
                            <i className="ml-lg-4 mr-lg-3 fa fa-search fa-fw">
                            </i>
                            <span>Lost</span>
                        </div>

                        {/*found button*/}
                        <div className={`${style.navButtonOther}`}>
                            <i className="ml-lg-4 mr-lg-3 fa fa-paw fa-fw">
                            </i>
                            <span>Found</span>
                        </div>

                        {/* services button*/}
                        <div className={`${style.navButtonOther} `}>
                            <i className="ml-lg-4 mr-lg-3 fa fa-bullhorn fa-fw">
                            </i>
                            <span>Services</span>
                        </div>

                        {/* favorites button*/}
                        <div className={`${style.navButtonOther}`}>
                            <i className="ml-lg-4 mr-lg-3 fa fa fa-star fa-fw">
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
                            <i className=" mr-lg-2 fa fa-sign-out fa-fw">
                            </i>
                            <span>Logout</span>
                        </div>

                        {/*Line_2*/}
                        <div className={`${style.line} mt-3 ml-lg-4`}>
                        </div>

                    </div>


                    {/* main Center*/}
                    <div className='col-lg-8 pt-lg-1'>

                        {/* Post1*/}
                        <div className={`${style.post} pt-lg-2 pl-lg-2 mb-lg-2`}>

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
                                            <i className={`${style.faMenu} fa fa-eye-slash fa-fw mr-lg-1`}>
                                            </i>
                                            <span>Hide from feed</span>
                                        </button>
                                        <button className={`${style.downMenuText} dropdown-item d-lg-inline-block`}>
                                            <i className={`${style.faMenu} fa fa fa-times fa-fw mr-lg-1`}>
                                            </i>
                                            <span>Unfollow</span>
                                        </button>
                                        <button className={`${style.downMenuText} dropdown-item d-lg-inline-block`}>
                                            <i className={`${style.faMenu} fa fa-pencil fa-fw mr-lg-1`}>
                                            </i>
                                            <span>Edit</span>
                                        </button>
                                        <button className={`${style.downMenuText} dropdown-item d-lg-inline-block`}>
                                            <i className={`${style.faMenu} fa fa-trash fa-fw mr-lg-1`}>
                                            </i>
                                            <span>Remove</span>
                                        </button>
                                    </div>
                                </div>
                            </div>


                            {/*Content*/}
                            <div className='row pt-lg-2'>
                                <p className={`${style.postText} col-lg-9 offset-lg-1`}>Lorem ipsum dolor sit amet,
                                    consectetur adipisicing
                                    elit.
                                    Eum, iusto, labore. Eligendi iusto, labore magni rerum sunt veniam?
                                    Aspernatur debitis delectus est labore molestias natus!
                                    A assumenda debitis in saepe.
                                </p>
                                <span
                                    className={`${style.favorites} fa fa-star-o col-lg-1 offset-lg-1 d-flex align-items-lg-end mb-lg-3`}>
                                    </span>
                            </div>
                        </div>

                        {/*Post2*/}
                        <div className={`${style.post} pt-lg-2 pl-lg-2 mb-lg-2`}>

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
                                            <i className={`${style.faMenu} fa fa-eye-slash fa-fw mr-lg-1`}>
                                            </i>
                                            <span>Hide from feed</span>
                                        </button>
                                        <button className={`${style.downMenuText} dropdown-item d-lg-inline-block`}>
                                            <i className={`${style.faMenu} fa fa fa-times fa-fw mr-lg-1`}>
                                            </i>
                                            <span>Unfollow</span>
                                        </button>
                                        <button className={`${style.downMenuText} dropdown-item d-lg-inline-block`}>
                                            <i className={`${style.faMenu} fa fa-pencil fa-fw mr-lg-1`}>
                                            </i>
                                            <span>Edit</span>
                                        </button>
                                        <button className={`${style.downMenuText} dropdown-item d-lg-inline-block`}>
                                            <i className={`${style.faMenu} fa fa-trash fa-fw mr-lg-1`}>
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

                    {/* main Right*/}
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