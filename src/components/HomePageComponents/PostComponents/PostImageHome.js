import React from "react";

const PostImage = (props) => (

    <div className='row mt-3 pl-3'>
        <div className='col-10 offset-lg-1'>
            <img
                src={require('../../../images/home_img/mainPostImageSmall.png')}
                alt=''/>
        </div>
    </div>
);

export default PostImage;