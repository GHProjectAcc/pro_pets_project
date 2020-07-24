import React from "react";
import HeaderLostFound from "../LostComponents/HeaderLostFound";
import MediaQuery from "react-responsive/src/Component";
import NavigationSmall from "../HomePageComponents/NavigationSmallHome";
import Navigation from "../HomePageComponents/NavigationHome";


class LostPage extends React.Component {
    render() {
        return (
            <div className='container'>
                <HeaderLostFound/>
                <div className='row h-100'>
                    <MediaQuery query='(max-width: 992px)'>
                        <NavigationSmall/>
                    </MediaQuery>
                    <MediaQuery query='(min-width: 993px)'>
                        <Navigation/>
                    </MediaQuery>
                </div>
            </div>
        );
    }
}


export default LostPage;