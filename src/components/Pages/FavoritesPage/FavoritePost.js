import React, {useState} from "react";
import style from "../../../css_modules/postFavorites.module.css";
import styleFromHome from "../../../css_modules/homePage.module.css";
import {connect} from "react-redux";

const Post = (props) => {
    const images = [
        require('../../../images/testPictures/pexels-photo-4206434.jpeg'),
        require('../../../images/testPictures/testPic1.jpg'),
        require('../../../images/testPictures/testPic2.jpg'),
        require('../../../images/testPictures/testPic3.jpg')
    ];

    const [postOnView, setPostOnView] = useState(false);
    const [count, setCount] = useState(0);

    const dateFormat = (date) => {
        let currentDate = Date.now();
        let day = 86400000;
        let month = 2592000000;
        if (currentDate - Date.parse(date) < day) {
            let hours = (currentDate - Date.parse(date)) / 3600000;
            return <span>{Math.round(hours)} h</span>;
        }
        if (currentDate - Date.parse(date) < month) {
            let days = (currentDate - Date.parse(date)) / day;
            return <span>{Math.round(days)} d</span>;
        }
        if (currentDate - Date.parse(date) > month) {
            let newDate = date.slice(0, 10);
            return <span>{newDate}</span>;
        }
    };

    const showPost = () => {
        setPostOnView(!postOnView);
    };

    const nextImage = () => {
        count + 1 < 4 ? setCount(count + 1) : setCount(0);
    };
    const prevImage = () => {
        count - 1 < 0 ? setCount(3) : setCount(count - 1);
    };


    return (
        <div className={`${style.post} row no-gutters mb-2 mx-1 ml-md-5 mr-md-2 mx-lg-1 pt-3 px-2`}>
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
                        {dateFormat(props.post.dateOfPublish)}
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
                <p>{props.post.text.length > 100 && !postOnView
                    ?
                    <span>
                            {props.post.text.substring(0, 100)}
                        <span className={`${styleFromHome.moreTextButton} `}
                              onClick={showPost}> ...more
                            </span>
                          </span>
                    :
                    props.post.text
                }
                    <i className={`${!postOnView ? styleFromHome.noDisplay : styleFromHome.collapseText} fas fa-angle-double-left pl-2`}
                       onClick={showPost}/>
                </p>
            </div>
            <div className='col-1 mb-2 pr-0 pl-0 pb-1 d-flex justify-content-end align-items-end'>
                <i className="fas fa-star"/>
            </div>
        </div>
    )
};

function mapStateToProps(state, ownProps) {
    const index = ownProps.index;
    return {
        post: state.postsFavorites.posts[index]
    }
}

export default connect(mapStateToProps)(Post);