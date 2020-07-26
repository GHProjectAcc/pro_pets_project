import style from "../../../../css_modules/homePage.module.css";
import React from "react";
import PostDropMenu from "./PostDropMenuHome";
import PostImage from "./PostImageHome";
import PostContent from "./PostContentHome";
import PostAuthorAvatar from "./PostAuthorAvatarHome";
import PostAuthorName from "./PostAuthorNameHome";
import {useMediaQuery} from "react-responsive/src";

const Post = (props) => {

    const small = useMediaQuery({query: '(maxWidth: 767px'});
    const medium = useMediaQuery({query: '(minWidth: 768px'});

    return (
        <div className={`${style.post} mt-3 pl-pr-1 container`}>
            <div className='pt-2 row'>
                <PostAuthorAvatar/>
                {small || medium ?
                    <div className='col-10 col-lg-10 pl-lg-0'>
                        <div className='row ml-0'>
                            <PostAuthorName/>
                            <PostDropMenu/>
                        </div>
                        <PostImage/>
                        <PostContent/>
                    </div>
                    :
                    <div>
                        <PostAuthorName/>
                        <PostDropMenu/>
                        <PostImage/>
                        <PostContent/>
                    </div>}
            </div>
        </div>
    )
};

export default Post;