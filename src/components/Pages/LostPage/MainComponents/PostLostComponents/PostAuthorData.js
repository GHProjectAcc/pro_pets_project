import React from "react";
import style from "../../../../../css_modules/lostPage.module.css";
import {connect} from "react-redux";

const PostAuthorData = (props) => {
    function dateOfPublish(newDate) {
        const date = new Date(newDate);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const day = date.getDate();
        return months[date.getMonth()] + ', ' + (day < 10 ? '0' + day : day) + " " + date.getFullYear();
    }

    return (
        <div className='col-12 pb-5 pt-1 pl-1 d-flex align-items-center'>
            <img className={`${style.avatarAuthor}`}
                 src={require('../../../../../images/home_img/logoKuzya.png')}
                 alt=''/>
            <div className='d-inline-block ml-3'>
                <span className={`${style.postAuthorName} d-block`}>{props.post.authorData.authorName}</span>
                <span className={`${style.postDate} d-block`}>{dateOfPublish(props.post.dateOfPublish)}</span>
            </div>
            <div className={`${style.contactIcons} ml-3`}>
                <i className='fas fa-phone-square-alt pr-1'/>
                <i className="fab fa-facebook-square pr-1"/>
                <i className="fas fa-envelope-square"/>
            </div>
        </div>
    )
};

function mapStateToProps(state, ownProps) {
    const index = ownProps.index;
    console.log(ownProps);
    return {
        post: state.postsLost[index]
    }
}

export default connect(mapStateToProps)(PostAuthorData);