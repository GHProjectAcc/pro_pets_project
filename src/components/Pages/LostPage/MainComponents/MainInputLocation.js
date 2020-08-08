import React from "react";
import style from "../../../../css_modules/lostPage.module.css";

const MainInputLocation = (props) => {
    return (
        <div className='col-12 mb-3'>
            <input className={`${style.locationButton} d-inline-block pl-3 ml-1 mr-2 mt-3`}
                   placeholder='Location'
                   type='text'/>
            <div className={`${style.mapButton} d-inline-block mt-3 pl-3 mx-2`}>
                <i className="fas fa-map-marked pl-2"/>
                <span className={`${style.mapButtonText} pl-3`}>Map view</span>
            </div>
        </div>
    )
};

export default MainInputLocation;