import React from "react";
import style from "../../css_modules/profile.module.css";
import Header from "../HomePageComponents/Header";
import NavigationSmall from "../HomePageComponents/NavigationSmallHome";
import Navigation from "../HomePageComponents/NavigationHome";
import AdRightColumn from "../HomePageComponents/AdvertisingHome";
import MainProfile from "../ProfileComponents/MainProfile";
import Footer from "../ProfileComponents/MainProfileFooter";
import MainActivities from "../ProfileComponents/MainActivities";

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