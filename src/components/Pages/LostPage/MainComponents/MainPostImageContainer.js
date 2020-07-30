import React, {useState} from "react";
import style from "../../../../css_modules/lostPage.module.css";
import {connect} from "react-redux";
import {store} from "../../../../redux/ProPetsStore";

const MainPostImageContainer = (props) => {
    const [count, setCount] = useState(0);

    const nextImage = () => {
        count + 1 > 3 ? setCount(0) : setCount(count + 1);
    };
    const prevImage = () => {
        count - 1 < 0 ? setCount(3) : setCount(count - 1);
    };
    console.log(store.getState())
    console.log(props.postsLost[0].picturesURLs[0]);
    return (
        /*<div className=''>*/
        <div className={`${style.lostImageBox} col-lg-5`}>
            <div className={`${style.chevron}`}>
                <a href=''>
                    <i className='fas fa-chevron-left'
                       onClick={prevImage}/>
                </a>
            </div>
            <img src={props.postsLost[0].picturesURLs[2]}
                 alt=''/>
            {/* <div className='d-flex align-items-center'>
                    <i className='fas fa-chevron-right'
                       onClick={nextImage}/>
                </div>*/}
        </div>
        /*  </div>*/
    )
};

function mapStateToProps(state) {
    return {
        postsLost: state.postsLost
    }
}

export default connect(mapStateToProps)(MainPostImageContainer);