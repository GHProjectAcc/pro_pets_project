import React from "react";
import Navigation from "./Pages/HomePage/NavigationHome";
import Header from "./Pages/HomePage/Header";
import AdRightColumn from "./Pages/HomePage/RightColorSideHome";
import NavigationSmall from "./Pages/HomePage/NavigationSmallHome";
import MainHome from "./Pages/HomePage/MainHome";
import style from "../css_modules/homePage.module.css";
import Menu from "./Menu";


const Home =(props) => {


    editFavorites = () => {
        this.setState({
            favorites: !this.state.favorites
        });
    };




        return (
            <div className={`${style.page} container`}>
                <Header/>
                <div className='row '>
                    {window.matchMedia('(max-width: 768px)').matches ? <NavigationSmall/> : <Menu/>}
                    <MainHome/>
                    <AdRightColumn/>
                </div>
            </div>);
};

export default Home;