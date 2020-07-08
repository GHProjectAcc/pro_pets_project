import style from "../../../css_modules/homePage.module.css";
import React from "react";

const PostContent = (props) => (
    <div className='row pt-2 pl-0 mx-0  ml-lg-n3 '>
        <div className='col-11'>
            <p className={`${style.postText}`}>
                Lorem
                ipsum dolor sit amet,
                consectetur adipisicing
                elit.
                Eum, iusto, labore. Eligendi iusto, labore magni rerum sunt veniam?
                Aspernatur debitis delectus est labore molestias natus!
                A assumenda debitis in saepe.</p>
        </div>
        <div className='col-1  col-lg-1 pb-4 pl-0 pl-lg-4 pr-0 d-flex align-items-end'
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