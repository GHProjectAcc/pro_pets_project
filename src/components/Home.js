import React, {useEffect, useState} from "react";
import Navigation from "./Pages/HomePage/NavigationHome";
import Header from "./Pages/HomePage/Header";
import AdRightColumn from "./Pages/HomePage/RightColorSideHome";
import NavigationSmall from "./Pages/HomePage/NavigationSmallHome";
import MainHome from "./Pages/HomePage/MainHome";
import style from "../css_modules/homePage.module.css";
import Menu from "./Menu";
import {useMediaQuery} from "react-responsive/src";
import DropMenu from "./DropMenu";
import Post from "./Pages/HomePage/PostComponents/PostHome";
import Pagination from "./Pagination";



const Home = (props) => {
    const [pageNumber, setPageNumber] = useState(1);

    const createPostFavorites = (post, index) => {
        return <Post key={post.id} index={index}/>
    };

    const changePage = (page) => {
        setPageNumber(page);
    };



    /*editFavorites = () => {
        this.setState({
            favorites: !this.state.favorites
        });
    };*/
    useEffect(() => {
        props.setPath('/home')
    },);

    return (


        <div className='col-12 col-lg-8 col-xl-6 ml-lg-0 pt-3 px-lg-2'>
            {props.posts.map(createPostFavorites)}
            <Pagination changePage={changePage}
                        pageNumber={pageNumber}/>
        </div>

    );
};

export default Home;