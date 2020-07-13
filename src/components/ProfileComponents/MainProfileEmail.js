import React from "react";
import style from "../../css_modules/profile.module.css";
import {connect} from "react-redux";

const ProfileEmail = (props) => (

    <div className='col-12 row mx-0 mt-4'>
        <div className='col-3  d-flex justify-content-end align-items-end'>
            <span className={`${style.email}`}>Email: </span>
        </div>
        <div className='col-9 pl-0'>
            <input type='email' className={`${style.emailInput} w-100`}
                   placeholder={props.user.email ? props.user.email : 'helenjohnson@gmail.com'}/>
        </div>
    </div>
);

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(ProfileEmail);