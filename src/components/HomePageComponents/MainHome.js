import Post from "./PostComponents/PostHome";
import React from "react";

const MainHome = (props) => (
    <div className={`col-12 col-lg-8 pt-2`}>
        {/* Post1*/}
        <Post/>
        <Post/>
        <Post/>
        <div className>
            <ul className="pagination justify-content-center">
                <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
        </div>
    </div>
);

export default MainHome;