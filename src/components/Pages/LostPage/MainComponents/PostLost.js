import React from "react";
import MainPostImageContainer from "./MainPostImageContainer";
import MainPostContentContainer from "./MainPostContentContainer";



const PostLost = (props) => {
    return (
        <div className='row'>
            <MainPostImageContainer index={props.index}/>
            <MainPostContentContainer index={props.index}/>
        </div>
    )
};

export default PostLost;