import React from "react";
import style from "../../css_modules/addPost.module.css";
import MainTextBox from "./MainTextInputAddPost";


const MainAddPost = (props) => {
    return (
        <div className={`col-12 col-lg-8 pt-3`}>
            {/* title addPost*/}
            <div className='mt-2'>
              <span className={`${style.titleText} pl-3`}>
                  Your new post! Simply text, add photos and publish.
              </span>
            </div>

            <div className={`${style.addPostText} mt-3 pl-pr-1 container`}>
                <div className='row'>

                    <div className={`col-lg-2 pl-0`}>
                        <span className={`${style.span1} d-block`}>
                            Text:
                        </span>
                        <span className={`${style.span2} d-block pl-0`}>
                            up to 1500 char
                        </span>
                    </div>
                    <MainTextBox/>
                </div>
                <div className='row mt-3'>
                    <div className={`col-2 pl-0`}>
                        <span className={`${style.span1} d-block`}>
                            Photos:
                        </span>
                        <span className={`${style.span2} d-block pl-0`}>
                            up to 4 images
                        </span>
                    </div>
                    <div className='col-10'>
                        <input type='file' className={`${style.photo1}`}>

                        </input>

                    </div>
                </div>
            </div>


        </div>

    )
};

export default MainAddPost;