import React from "react";
import MainPostImageContainer from "./MainPostImageContainer";
import MainPostContentContainer from "./MainPostContentContainer";

const PostLost = (props) => {
    return (
        <div className='row'>
            <MainPostImageContainer/>
            <MainPostContentContainer/>
        </div>
    )
};

export default PostLost;