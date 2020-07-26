import React, {useState} from "react";
import style from "../../../../css_modules/profile.module.css";
import {connect} from "react-redux";
import {editEmail} from "../../../../redux/actions/EditUserActions";

const ProfileEmail = (props) => {

    const [email, setEmail] = useState(null);
    const [editor, setEditor] = useState(true);

    const handleChange = event => {
        event.preventDefault();
        setEmail(event.target.value);
        props.editEmail(email);
    };

    const handleChangeEditor = () => {
        setEditor(!editor)
    };

    return (
        <div className='col-12 row mx-0 mt-4'>
            <div className='col-3  d-flex justify-content-end align-items-end'>
                <span className={`${style.email}`}>Email: </span>
            </div>
            <div className='col-9 pl-0'>
                {props.user.email && editor ?
                    <span
                        className={`${style.emailText}`}
                        onClick={handleChangeEditor}
                    >
                        {props.user.email}
                    </span>
                    : <input className={`${style.emailInput} w-100`}
                             placeholder='helenjohnson@gmail.com'
                             type='email'
                             value={email}
                             onChange={handleChange}/>}

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
    editEmail: email => dispatch(editEmail(email))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEmail);