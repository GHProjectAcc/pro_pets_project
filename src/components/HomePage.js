import React from "react";
import Navigation from "./HomePageComponents/NavigationHome";
import {store} from "../store/ProPetsStore";
import Post from "./HomePageComponents/PostComponents/PostHome";
import Header from "./HomePageComponents/HeaderHome";
import AdRightColumn from "./HomePageComponents/AdvertisingHome";
import NavigationSmall from "./HomePageComponents/NavigationSmallHome";
import Main from "./HomePageComponents/MainHome";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: 'https://www.gravatar.com/avatar/0',
            name: 'Kuzya',
            avatarAuthor: require('../images/home_img/logoKuzya.png'),
            time: '2h',
            posts: [],
            favorites: false
        }
    }


    editFavorites = () => {
        this.setState({
            favorites: !this.state.favorites
        });
    };

    render() {
        console.log(store.getState());
        console.log(window.matchMedia('(max-width: 767px').matches);
        return (
            <div className='container '>
                <Header/>
                <div className='row'>
                    {window.matchMedia('max-width: 767px').matches ? <NavigationSmall/> : <Navigation/>}
                    <Main/>
                    <AdRightColumn/>
                </div>
            </div>);
    }
}

export default HomePage;