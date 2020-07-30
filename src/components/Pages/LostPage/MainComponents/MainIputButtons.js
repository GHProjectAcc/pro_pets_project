import React from "react";
import style from "../../../../css_modules/lostPage.module.css";

const MainInputButtons = (props) => {
    return (
        <div className='col-12'>
            <input className={`${style.typeButton} d-inline-block pl-3 ml-1 mr-2 `}
                   placeholder='Type'
                   type='text'/>
            <input className={`${style.typeButton} d-inline-block pl-3 mx-2`}
                   placeholder='Breed'
                   type='text'/>
            <input className={`${style.additionalButton} d-inline-block pl-3 mx-2`}
                   placeholder='Additional features'
                   type='text'/>
        </div>
    )
};

export default MainInputButtons;