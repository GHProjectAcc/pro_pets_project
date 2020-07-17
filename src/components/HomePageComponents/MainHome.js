import Post from "./PostComponents/PostHome";
import React from "react";

const MainHome = (props) => (
    <div className={`col-12 col-lg-8 pt-2`}>
        {/* Post1*/}
        <Post/>
        <Post/>
        <Post/>
    </div>
);

export default MainHome;