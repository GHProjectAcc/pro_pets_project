import React from "react";
import PostImageContainer from "./PostLostComponents/PostImageContainer";
import PostContentContainer from "./PostLostComponents/PostContentContainer";
import style from "../../../../css_modules/lostPage.module.css";


const PostLost = (props) => {
    return (
        <div className={`${style.lostPostContainer} container mb-4 mx-lg-3 `}>
            <div className='row'>
                <PostImageContainer index={props.index}/>
                <PostContentContainer index={props.index}/>
            </div>
        </div>
    )
};

export default PostLost;