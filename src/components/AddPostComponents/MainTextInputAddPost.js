import React from "react";
import style from "../../css_modules/addPost.module.css";

class MainTextBox extends React.Component {
    render() {
        return (
            <div className={`${style.textBox} col-lg-10 pt-1`}>
                <input className={`${style.inputTextBox} w-100 `}
                       type='text'
                       maxLength='1500'/>
            </div>
        );
    }

}

export default MainTextBox;