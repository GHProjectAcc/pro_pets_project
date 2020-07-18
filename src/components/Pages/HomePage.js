import React from "react";
import Navigation from "../HomePageComponents/NavigationHome";
import Header from "../HomePageComponents/Header";
import AdRightColumn from "../HomePageComponents/AdvertisingHome";
import NavigationSmall from "../HomePageComponents/NavigationSmallHome";
import MainHome from "../HomePageComponents/MainHome";
import style from "../../css_modules/homePage.module.css";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: 'https://www.gravatar.com/avatar/0',
            name: 'Kuzya',
            avatarAuthor: require('../../images/home_img/logoKuzya.png'),
            time: '2h',
            posts: [],
            favorites: false,
            activePage: 0
        }
    }

    editFavorites = () => {
        this.setState({
            favorites: !this.state.favorites
        });
    };

    render() {
        return (
            <div className={`${style.page} container`}>
                <Header/>
                <div className='row h-100'>
                    {window.matchMedia('(max-width: 768px)').matches ? <NavigationSmall/> : <Navigation/>}
                    <MainHome/>
                    <AdRightColumn/>
                </div>
            </div>);
    }
}

export default Home;