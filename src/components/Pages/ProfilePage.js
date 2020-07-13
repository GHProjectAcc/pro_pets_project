import React from "react";
import style from "../../css_modules/profile.module.css";
import Header from "../HomePageComponents/Header";
import NavigationSmall from "../HomePageComponents/NavigationSmallHome";
import Navigation from "../HomePageComponents/NavigationHome";
import AdRightColumn from "../HomePageComponents/AdvertisingHome";
import MainProfile from "../ProfileComponents/MainProfile";

const Profile = (props) => (
    <div className={`${style.page} container`}>
        <Header/>
        <div className='row h-100 '>
            {window.matchMedia('(max-width: 768px)').matches ? <NavigationSmall/> : <Navigation/>}
            <MainProfile/>
            <AdRightColumn/>
        </div>
        <div className={`${style.footer} row justify-content-center`}>
            <div className={`${style.footerLogo} col-6  pt-5`}>
            </div>
            <div className={`${style.address}`}>
                <span className='d-block'>1600 Amphitheatre Pkwy Mountain View, </span>
                <span className='d-block'>CA 94043,USA</span>
            </div>

        </div>
    </div>);


export default Profile;