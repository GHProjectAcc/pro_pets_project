import React, {useState} from "react";
import style from "../../../../css_modules/profile.module.css";
import {connect} from "react-redux";
import {editName} from "../../../../redux/actions/EditUserActions";

const AvatarName = (props) => {

    const [name, setName] = useState(props.user.name);
    const [onUpdate, setUpdate] = useState(false);

    const changeName = () => {
        setUpdate(!onUpdate);
    };

    const handleChangeName = (event) => {
        event.preventDefault();
        setName(event.target.value);
        props.editName(name);
    };
    return (
        <div className='col-12 mt-4 row mx-0 align-items-center '>
            <div className={`${style.avatar} col-3 text-right `}>
                <img src={props.user.avatarAuthor}
                     alt=''/>
                <div className={`${style.avatarChangeButton}`}>
                    <i className="fas fa-camera"/>
                </div>
            </div>
            <div className={`col-9 pl-0`}>
                {!onUpdate ?
                    <span className={`${style.authorName} `}>{props.user.name}
                        <i className='fas fa-pencil-alt pl-2'
                           onClick={changeName}/>
                    </span>
                    :
                    <input className={`${style.emailInput} w-100`}
                           type='name'
                           value={name}
                           onChange={handleChangeName}/>
                }

            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => ({
    editName: name => dispatch(editName(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(AvatarName);