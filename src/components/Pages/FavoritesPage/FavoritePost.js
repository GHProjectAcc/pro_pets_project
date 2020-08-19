import React, {useState} from "react";
import style from "../../../css_modules/postFavorites.module.css";
import {connect} from "react-redux";

const Post = (props) => {
    const images = [
        require('../../../images/testPictures/pexels-photo-4206434.jpeg'),
        require('../../../images/testPictures/testPic1.jpg'),
        require('../../../images/testPictures/testPic2.jpg'),
        require('../../../images/testPictures/testPic3.jpg')
    ];

    const [postOnView, setPostOnView] = useState(false);
    const showPost = () => {
        setPostOnView(!postOnView);
    };

    const [count, setCount] = useState(0);
    const nextImage = () => {
        count + 1 < 4 ? setCount(count + 1) : setCount(0);
    };
    const prevImage = () => {
        count - 1 < 0 ? setCount(3) : setCount(count - 1);
    };
console.log(props.post)
    return (
        <div className={`${style.post} row no-gutters mb-2 mx-1 ml-md-5 mr-md-2 mx-lg-1 pt-3 pr-3 `}>
            <div className='col-2 pl-2 pr-0 text-center '>
                <img className={`${style.authorAvatar}`}
                     src={require('../../../images/home_img/logoKuzya.png')}
                     alt=''/>
            </div>
            <div className={`${style.authorName} col-9 pl-2`}>
                <div>
                          <span className='d-block'>
                              {props.post.authorData.authorName}
                    </span>
                    <span className={`${style.timeStamp} d-block`}>
                        2h
                    </span>
                </div>
            </div>

            <div className={`${style.postImage} offset-md-1 col-md-10 mt-2 pr-0`}>
                <div className={`${style.chevronLeft} px-2 py-2`}>
                    <i className='fas fa-chevron-left' onClick={prevImage}/>
                </div>
                <div className={`${style.chevronRight} px-2 py-2`}>
                    <i className='fas fa-chevron-right' onClick={nextImage}/>
                </div>
                <img src={images[count]} alt=''/>
            </div>

            <div className='col-11 col-md-10 offset-md-1 mt-2 pl-2'>
                <p>Pictures, abstract symbols, materials, and colors are among the ingredients with which a
                    designer
                    or engineer works. To design is to discover relationships and to make arrangements and
                    rearrangements among these ingredients.
                    {/*   {props.post.description.length > 100 && !postOnView
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
                           onClick={showPost}/> */}
                    <span onClick={showPost}> ...more </span></p>
            </div>
            <div className='col-1 mb-2 pr-0 pl-0 pb-1 d-flex justify-content-end align-items-end'>
                <i className="fas fa-star"/>
            </div>
        </div>
    )
};

function mapStateToProps(state, ownProps) {
    const index = ownProps.index;
    console.log(index)
    return {
        post: state.posts.posts[index]
    }
}

export default connect(mapStateToProps)(Post);