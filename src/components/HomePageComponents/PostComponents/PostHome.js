import style from "../../../css_modules/homePage.module.css";
import React from "react";
import PostDropMenu from "./PostDropMenuHome";
import PostImage from "./PostImageHome";
import PostContent from "./PostContentHome";
import PostAuthorAvatar from "./PostAuthorAvatarHome";
import PostAuthorName from "./PostAuthorNameHome";
import MediaQuery from "react-responsive/src/Component";

const Post = (props) => (
    <div className={`${style.post} mt-3 pl-pr-1 container`}>
        <div className='pt-2 row'>
            <PostAuthorAvatar/>
            <MediaQuery query='(min-width: 1024px)'>
                <div className='col-10 col-lg-10 pl-lg-0'>
                    <div className='row ml-0'>
                        <PostAuthorName/>
                        <PostDropMenu/>
                    </div>
                    <PostImage/>
                    <PostContent/>
                </div>
            </MediaQuery>
            <MediaQuery query='(max-width: 768px)'>
                <PostAuthorName/>
                <PostDropMenu/>
                <PostImage/>
                <PostContent/>
            </MediaQuery>
        </div>
    </div>
);

export default Post;