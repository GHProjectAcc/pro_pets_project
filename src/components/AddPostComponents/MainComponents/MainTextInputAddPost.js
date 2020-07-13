import React from "react";
import style from "../../../css_modules/addPost.module.css";

class MainTextBox extends React.Component {
    render() {
        return (
            <div className={`${style.textBox} col-lg-10 pt-1`}>
                <textarea className={`${style.inputTextBox} w-100 px-2 py-2`}
                       maxLength='1500'/>
            </div>
        );
    }

}

export default MainTextBox;