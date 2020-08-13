import style from "../../../css_modules/homePage.module.css";
import React from "react";

const RightColorSide = (props) => {
    const images =
        [require('../../../images/home_img/targetingPic1Large.png'),
            require('../../../images/home_img/targetingPic2Large.png')
            , require('../../../images/home_img/targetingPic3Large.png')];
    return (
        <div className={`${style.targeting} col-lg-1 col-xl-3 text-left`}>
            <img className='mt-4 pr-3 d-none d-xl-block'
                 src={images[0]}
                 alt=''/>
            <img className='mt-5 pr-3 d-none d-xl-block'
                 src={images[1]}
                 alt=''/>
            <img className='mt-5 pr-3 d-none d-xl-block'
                 src={images[2]}
                 alt=''/>
        </div>
    )
};

export default RightColorSide;