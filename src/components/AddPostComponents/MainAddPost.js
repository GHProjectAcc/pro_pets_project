import React from "react";
import style from "../../css_modules/addPost.module.css";
import MainTextBox from "./MainComponents/MainTextInputAddPost";
import Title from "./MainComponents/TitleAddPost";
import ConditionText from "./MainComponents/ConditionTextAddPost";
import ConditionPhoto from "./MainComponents/ConditionPhotoAddPost";
import PhotoBox from "./MainComponents/PhotoBoxAddPost";
import BrowseButton from "./MainComponents/BrowseButtonAddPost";
import RemoveBox from "./MainComponents/ImageRemoveBoxAddPost";


const MainAddPost = (props) => {
    return (
        <div className={`col-12 col-lg-8 pt-3`}>
            {/* title addPost*/}
            <Title/>
            <div className={`${style.addPostText} mt-3 pl-pr-1 container`}>
                <div className='row'>
                    <ConditionText/>
                    <MainTextBox/>
                </div>
                <div className='row mt-3'>
                    <ConditionPhoto/>
                    <div className='col-10 row mx-0 '>
                        <PhotoBox/>
                        <BrowseButton/>
                        <RemoveBox/>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default MainAddPost;