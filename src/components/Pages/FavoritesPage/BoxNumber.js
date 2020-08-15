import React, {useState} from "react";
import style from "../../../css_modules/pagination.module.css";

const BoxNumber = (props) => {
    const [displayButton, setDisplayButton] = useState(true);

    const handleClick = () => {
        props.changePage(props.value);
        setDisplayButton(!displayButton);
    };


    return (
        <div
            className={`${props.pageNumber !== props.value ? style.boxNumberOff : style.boxNumberOn} d-flex mx-2  justify-content-center align-items-center`}
            onClick={handleClick}>
            <span>{props.value}</span>
        </div>
    );
};

export default BoxNumber;