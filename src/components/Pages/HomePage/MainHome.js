import Post from "./PostComponents/PostHome";
import React from "react";
import Pagination from "../../PostPagination";


const MainHome = (props) => (
    <div className={`col-12 col-lg-8 pt-2`}>
        {/* Post1*/}
        <Post/>
        <Post/>
        <Post/>
        <Pagination/>
    </div>
);

export default MainHome;