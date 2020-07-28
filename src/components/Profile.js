import React from "react";
import style from "../css_modules/profile.module.css";
import Header from "./Pages/HomePage/Header";
import NavigationSmall from "./Pages/HomePage/NavigationSmallHome";
import Navigation from "./Pages/HomePage/NavigationHome";
import AdRightColumn from "./Pages/HomePage/AdvertisingHome";
import MainProfile from "./Pages/ProfilePage/ProfileComponents/MainProfile";
import Footer from "./Pages/ProfilePage/ProfileComponents/MainProfileFooter";
import MainActivities from "./Pages/ProfilePage/ProfileComponents/MainActivities";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: true
        }
    }

    render() {
        return (
            <div className={`${style.page} container`}>
                <Header/>
                <div className='row h-100 '>
                    {window.matchMedia('(max-width: 768px)').matches ? <NavigationSmall/> : <Navigation/>}
                    {this.state.profile ?  <MainProfile/> : <MainActivities/>}
                    <AdRightColumn/>
                </div>
                <Footer/>
            </div>);

    }
}


export default Profile;