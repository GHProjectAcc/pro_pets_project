import React, {useState} from "react";
import style from "../../css_modules/profile.module.css";
import {connect} from "react-redux";
import {editFBLink} from "../../actions/EditUserActions";

const ProfileFBLink = (props) => {
    const [fblink, setFblink] = useState(null);
    const [editor, setEditor] = useState(true);

    const handleChange = event => {
        event.preventDefault();
        setFblink(event.target.value);
        props.editFBLink(fblink);
    };

    const handleChangeEditor = () => {
        setEditor(!editor)
    };

    return (
        <div className='col-12 row mx-0 mt-2'>
            <div className='col-3  d-flex justify-content-end align-items-end'>
                <span className={`${style.email}`}>FBLink:</span>
            </div>
            <div className='col-9 pl-0'>
                {props.user.fblink && editor ?
                    <span
                        className={`${style.emailText}`}
                        onClick={handleChangeEditor}>
                        {props.user.fblink}
                    </span>
                    :
                    <input className={`${style.emailInput} w-100`}
                           placeholder='https://www.facebook.com/anna.smith908430'
                           value={fblink}
                           onChange={handleChange}/>
                }
            </div>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => ({
    editFBLink: fblink => dispatch(editFBLink(fblink))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFBLink);