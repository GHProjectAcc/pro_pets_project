import style from "../../../css_modules/homePage.module.css";
import React, {useState} from "react";
import {connect} from "react-redux";

const PostContent = (props) => {
    const [postOnView, setPostOnView] = useState(false);

    const showPost = () => {
        setPostOnView(!postOnView);
    };
    return (
        <div className='row pt-2 pl-0 mx-0  ml-lg-n3 '>
            <div className='col-11 pr-0 pl-4 d-flex justify-content-center'>
                <div className={`${style.postText} pb-2`}>
                    {props.post.text.length > 200 && !postOnView
                        ?
                        <span>{props.post.text.substring(0, 200)}
                            <span className={`${style.moreTextButton} `}
                                  onClick={showPost}> ...more</span>
                          </span>
                        :
                        props.post.text
                    }
                    <i className={`${!postOnView ? style.noDisplay : style.collapseText} fas fa-angle-double-left pl-2`}
                       onClick={showPost}/>
                </div>
            </div>
            <div className='col-1  col-lg-1 pb-3 pl-0 pl-lg-4 pr-0 d-flex align-items-end'
                /* onClick={this.editFavorites}*/>
                                    <span className='fa fa-star'>
                                    </span>
                {/*className={`${!this.state.favorites ?
                                        `${style.favorites} fa fa-star-o` :
                                        `${style.inFavorites} fa fa-star`} `}*/}
            </div>
        </div>
    )
};

/*console.log(props.post.content);*/

function mapStateToProps(state) {
    return {
        post: state.post
    }
}

export default connect(mapStateToProps)(PostContent);