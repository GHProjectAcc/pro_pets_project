import React, {useState} from "react";
import style from "../../../../../css_modules/lostPage.module.css";
import {connect} from "react-redux";

const PostImageContainer = (props) => {
    const [count, setCount] = useState(0);

    const nextImage = () => {
        count + 1 > 3 ? setCount(0) : setCount(count + 1);
    };
    const prevImage = () => {
        count - 1 < 0 ? setCount(3) : setCount(count - 1);
    };
    const index = props.index;
    return (

        <div className={`${style.lostImageBox} col-lg-5 pl-2 pr-0 py-2`}>
            <div className={`${style.chevronLeft} d-inline-block text-left`}>
                <i className='fas fa-chevron-left pl-1'
                   onClick={prevImage}/>
            </div>
            <div className={`${style.chevronRight} d-inline-block text-right`}>
                <i className='fas fa-chevron-right pr-1'
                   onClick={nextImage}/>
            </div>
            <img src={props.postsLost[index].picturesURLs[count]}
                 alt=''/>
        </div>

    )
};

function mapStateToProps(state) {
    return {
        postsLost: state.postsLost
    }
}

export default connect(mapStateToProps)(PostImageContainer);