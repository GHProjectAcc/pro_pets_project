import React from "react";
import style from "../css_modules/favorites.module.css"

const Favorites = (props) => {

    return (
        <div className={`${style.test} container mx-0`}>
            <div className='row'>
                <div className={`${style.header} col-12 mb-3`}>
                    <div className='row h-100'>
                        <div className='col-2 d-flex justify-content-center align-items-center'>
                            <i className="fas fa-bars"/>
                        </div>
                        <div className={`${style.headerLogo} col-5`}/>
                        <div className='offset-3 col-2 d-flex justify-content-center align-items-center'>
                            <i className="fas fa-plus"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.post} row mb-2 mx-1 pt-3`}>
                <div className='col-2'>
                    <img className={`${style.authorAvatar}`}
                         src={require('../images/home_img/logoKuzya.png')}
                         alt=''/>
                </div>
                <div className={`${style.authorName} col-10`}>
                    <div>
                          <span className='d-block'>
                        John Krasnozhon
                    </span>
                        <span className={`${style.timeStamp} d-block`}>
                        2h
                    </span>
                    </div>

                </div>
                <div className='col-12 mt-3'>
                    <p>Pictures, abstract symbols, materials, and colors are among the ingredients with which a designer
                        or engineer works. To design is to discover relationships and to make arrangements and
                        rearrangements among these ingredients.</p>
                </div>
            </div>
        </div>
    );
};

export default Favorites;