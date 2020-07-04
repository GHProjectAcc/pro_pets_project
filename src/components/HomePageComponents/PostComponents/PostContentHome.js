import style from "../../../css_modules/homePage.module.css";
import React from "react";

const PostContent = (props) => (
    <div className='row pt-2'>
        <div className='col-11 pl-3 col-lg-9 offset-lg-2 pl-lg-0'>
            <p className={`${style.postText}`}>
                Lorem
                ipsum dolor sit amet,
                consectetur adipisicing
                elit.
                Eum, iusto, labore. Eligendi iusto, labore magni rerum sunt veniam?
                Aspernatur debitis delectus est labore molestias natus!
                A assumenda debitis in saepe.</p>
        </div>
        <div className='col-1  col-lg-1 pb-4 pl-0 pl-lg-3 d-flex align-items-end'
            /* onClick={this.editFavorites}*/>
                                    <span className='fa fa-star'>
                                    </span>
            {/*className={`${!this.state.favorites ?
                                        `${style.favorites} fa fa-star-o` :
                                        `${style.inFavorites} fa fa-star`} `}*/}
        </div>
    </div>
);
export default PostContent;