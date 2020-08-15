import React, {useEffect, useState} from "react";
import Navigation from "./Pages/HomePage/NavigationHome";
import Header from "./Pages/HomePage/Header";
import AdRightColumn from "./Pages/HomePage/RightColorSideHome";
import NavigationSmall from "./Pages/HomePage/NavigationSmallHome";
import MainHome from "./Pages/HomePage/MainHome";
import style from "../css_modules/homePage.module.css";
import Menu from "./Menu";
import {useMediaQuery} from "react-responsive/src";
import DropMenu from "./Pages/FavoritesPage/DropMenu";


const Home = (props) => {
    const smallMedium = useMediaQuery({maxWidth: 991.98});
    const [pageNumber, setPageNumber] = useState(1);

    /*editFavorites = () => {
        this.setState({
            favorites: !this.state.favorites
        });
    };*/
    useEffect(() => {
        props.setPath('/home')
    });

    return (
        <div className='row '>
            {smallMedium ?
                <DropMenu display={props.dropMenu}
                          pageNumber={pageNumber}/>
                :
                <Menu display={props.dropMenu}
                      pageNumber={pageNumber}/>}
            <MainHome/>
        </div>
    );
};

export default Home;