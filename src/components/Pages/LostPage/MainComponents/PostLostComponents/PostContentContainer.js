import React, {useState} from "react";
import style from "../../../../../css_modules/lostPage.module.css";
import styleFromHome from "../../../../../css_modules/homePage.module.css";
import {connect} from "react-redux";
import PostAuthorData from "./PostAuthorData";

const PostContentContainer = (props) => {

    const [postOnView, setPostOnView] = useState(false);
    const showPost = () => {
        setPostOnView(!postOnView);
    };

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    return (
        <div className='mx-0 col-lg-7 pt-2 pl-2  row'>
            <div className={`${style.postTitle} col-lg-12 pt-1 mb-2 pl-1`}>
                <span>{capitalizeFirstLetter(props.post.type)}, </span>
                <span>{capitalizeFirstLetter(props.post.breed)}</span>
            </div>
            <div className={`${style.propertiesContainer} col-lg-5 px-1 pt-1 pb-0`}>
                <div>
                    <span className={`${style.properties} pr-1`}>Color: </span>
                    <span className={`${style.propertiesText}`}>{props.post.color}</span>
                </div>
                <div>
                    <span className={`${style.properties} pr-1`}>Sex: </span>
                    <span className={`${style.propertiesText}`}>{props.post.sex}</span>
                </div>
                <div>
                    <span className={`${style.properties} pr-1`}>Height: </span>
                    <span className={`${style.propertiesText}`}>{props.post.height}</span>
                </div>
            </div>
            <div className={`${style.propertiesContainer} col-lg-7 pl-0  pt-1 pb-0`}>
                <span className={`${style.properties} pr-1`}>Distinctive features: </span>
                <span className={`${style.propertiesText}`}>{props.post.distinctiveFeatures}</span>
            </div>
            <div className={`${style.propertiesContainer} col-lg-12 px-1 pt-0`}>
                <span className={`${style.properties} pr-1`}>Description: </span>
                <span className={`${style.propertiesText}`}>
                    {props.post.description.length > 100 && !postOnView
                        ?
                        <span>
                            {props.post.description.substring(0, 100)}
                            <span className={`${styleFromHome.moreTextButton} `}
                                  onClick={showPost}> ...more
                            </span>
                          </span>
                        :
                        props.post.description
                    }
                    <i className={`${!postOnView ? styleFromHome.noDisplay : styleFromHome.collapseText} fas fa-angle-double-left pl-2`}
                       onClick={showPost}/>
                </span>
            </div>

            {/*Line*/}
            <div className={`${style.line} col-12`}/>

            {/*Lost location*/}
            <div className={`${style.propertiesContainer} col-lg-12 pt-1 pl-1 pb-0`}>
                <i className={`${style.locationIcon} fas fa-map-marker pr-2 pl-0`}/> <span
                className={`${style.locationText}`}>{props.post.address}</span>
            </div>
            {/* AuthorAvatar & authorName */}
            <PostAuthorData index={props.index}/>
        </div>
    )
};

function mapStateToProps(state, ownProps) {
    const index = ownProps.index;
    return {
        post: state.postsLost[index]
    }
}

export default connect(mapStateToProps)(PostContentContainer);