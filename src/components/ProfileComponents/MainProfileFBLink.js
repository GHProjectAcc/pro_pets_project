import React from "react";
import style from "../../css_modules/profile.module.css";
import {connect} from "react-redux";

const ProfileFBLink = (props) => (
    <div className='col-12 row mx-0 mt-2'>
        <div className='col-3  d-flex justify-content-end align-items-end'>
            <span className={`${style.email}`}>FBLink:</span>
        </div>
        <div className='col-9 pl-0'>
            <input className={`${style.emailInput} w-100`}
                   placeholder={props.user.fblink ? props.user.fblink : 'https://www.facebook.com/anna.smith908430'}/>
        </div>
    </div>
);

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(ProfileFBLink);