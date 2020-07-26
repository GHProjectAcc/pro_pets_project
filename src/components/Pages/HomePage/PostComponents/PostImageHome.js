import React, {useState} from "react";
import style from "../../../../css_modules/homePage.module.css";
import {connect} from "react-redux";

const PostImage = (props) => {
    const [count, setCount] = useState(0);

    const nextImage = () => {
        count + 1 > 3 ? setCount(0) : setCount(count + 1);
    };
    const prevImage = () => {
        count - 1 < 0 ? setCount(3) : setCount(count - 1);
    };

    return (
        <div className='row mt-2 pl-lg-0 mx-0 ml-lg-n3 '>
            <div className={`${style.arrowImage}  d-flex`}>
                <i className='fas fa-chevron-left'
                   onClick={prevImage}/>
            </div>
            <div className='col-11 d-flex justify-content-center'>
                <img className={`${style.postImage} `}
                     src={props.postImage[count]}
                     alt=''/>
            </div>
            <div className={`${style.arrowImage}  d-flex`}>
                <i className='fas fa-chevron-right'
                   onClick={nextImage}/>
            </div>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        postImage: state.post.pictures
    }
}

export default connect(mapStateToProps)(PostImage);