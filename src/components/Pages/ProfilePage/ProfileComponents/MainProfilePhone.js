import React, {useState} from "react";
import style from "../../../../css_modules/profile.module.css";
import {connect} from "react-redux";
import {editPhone} from "../../../../redux/actions/EditUserActions";

const ProfilePhone = (props) => {
    const [phone, setPhone] = useState('000-000-00-00');
    const [editor, setEditor] = useState(true);

    const handleChange = event => {
        event.preventDefault();
        setPhone(event.target.value);
        props.editPhone(phone);
    };

    const handleChangeEditor = () => {
        setEditor(!editor)
    };

    return (
        <div className='col-12 row mx-0 mt-2'>
            <div className='col-3  d-flex justify-content-end align-items-end'>
                <span className={`${style.email}`}>Phone:</span>
            </div>
            <div className='col-9 pl-0'>
                {props.user.phone && editor ?
                    <span
                        className={`${style.emailText}`}
                        onClick={handleChangeEditor}>
                        {props.user.phone}
                    </span>
                    :
                    <input className={`${style.emailInput} w-100`}
                           type='tel'
                           placeholder='000-000-00-00'
                           value={phone}
                           onChange={handleChange}/>}
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        user: state.user

    };
}

const mapDispatchToProps = dispatch => ({
    editPhone: phone => dispatch(editPhone(phone))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePhone);