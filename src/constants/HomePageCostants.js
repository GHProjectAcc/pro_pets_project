import style from "../css_modules/homePage.module.css";
import React from "react";

export const postDropMenu = (
    <div className="dropdown  col-1 offset-4 pr-2 pl-0 pl-lg-3 col-lg-1 offset-lg-5">
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
);

export const mainRightColumn = (
    <div className={`${style.targeting} col-lg-1`}>
        <div className={`${style.pic1} mt-lg-3 `}>
        </div>
        <div className={`${style.pic2} mt-lg-3`}>
        </div>
        <div className={`${style.pic3} mt-lg-3 mb-lg-3`}>
        </div>
    </div>
);

export const mainCenterColumn = (
    <div className={`col-12 col-lg-8 pt-2`}>
        {/* Post1*/}
        <div className={`${style.post} mt-3 pl-pr-1 container`}>
            <div className='pt-2 row'>
                {/*AuthorAvatar*/}
                <div className='col-2 pr-0'>
                    <img className={`${style.avatarAuthor} `}
                         src={require('../images/home_img/logoKuzya.png')}
                         alt=''/>
                </div>

                {/*AuthorName*/}
                <div className={`${style.postAuthorName} col-5 col-lg-4 pl-0`}>
                    <span>Name</span>
                    <span className={`${style.postTime} d-block`}>2h</span>
                </div>

                {/*   DropMenu*/}
                {postDropMenu}
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
                <div className='col-1  col-lg-1 pb-4 pl-0 pl-lg-3 d-flex align-items-end'
                    /* onClick={this.editFavorites}*/>
                                    <span  className='fa fa-star'>
                                    </span>
                    {/*className={`${!this.state.favorites ?
                                        `${style.favorites} fa fa-star-o` :
                                        `${style.inFavorites} fa fa-star`} `}*/}
                </div>

            </div>
        </div>

        {/*Post2*/}
        <div className={`${style.post} mt-3 pl-pr-1 container`}>
            <div className='pt-2 row'>
                {/*AuthorAvatar*/}
                <div className='col-2 pr-0'>
                    <img className={`${style.avatarAuthor} `}
                         src={require('../images/home_img/logoKuzya.png')}
                         alt=''/>
                </div>

                {/*AuthorName*/}
                <div className={`${style.postAuthorName} col-5 col-lg-4 pl-0`}>
                    <span>Name1</span>
                    <span className={`${style.postTime} d-block`}>3h</span>
                </div>

                {/*   DropMenu*/}
                {postDropMenu}
            </div>

            {/* Image*/}
            <div className='row mt-3 pl-3'>
                <div className='col-10 offset-lg-1'>
                    <img
                        src={require('../images/home_img/mainPostImageSmall.png')}
                        alt=''/>
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
                    <span className='fa fa-star'/>
                                   {/* <span className={`${!this.state.favorites ?
                                        `${style.favorites} fa fa-star-o` :
                                        `${style.inFavorites} fa fa-star`} `}>
                                    </span>*/}
                </div>

            </div>
        </div>

    </div>
);

export const header = (
    <div className={`${style.header} row pr-lg-1 align-items-center`}>
        {/* DropMenu for xs-sm media*/}
        <span className={`${style.headerDropMenu} fa fa-bars col-2 text-center`}
             /* onClick={this.mainNavigationOnClick}*/>
                    </span>

        {/*HeaderLogo & HeaderButton*/}
        <div className={`${style.headerLogo} col-5 col-lg-2 offset-lg-0 `}>
        </div>
        <div
            className={`col-2 offset-3 col-lg-2 offset-lg-8 align-items-center d-flex ${style.headerButton}`}>
            <i className="fa fa-plus mr-lg-5 ">
            </i>
            <span className={`${style.headerButtonText}`}>Add new</span>
        </div>
    </div>
);

