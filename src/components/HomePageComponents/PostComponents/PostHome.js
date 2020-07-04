import style from "../../../css_modules/homePage.module.css";
import React from "react";
import PostDropMenu from "./PostDropMenuHome";
import PostImage from "./PostImageHome";
import PostContent from "./PostContentHome";
import PostAuthorAvatar from "./PostAuthorAvatarHome";
import PostAuthorName from "./PostAuthorNameHome";

const Post = (props) => (
    <div className={`${style.post} mt-3 pl-pr-1 container`}>
        <div className='pt-2 row'>
            <PostAuthorAvatar/>
            <PostAuthorName/>
            <PostDropMenu/>
        </div>
        <PostImage/>
        <PostContent/>
    </div>
);

export default Post;