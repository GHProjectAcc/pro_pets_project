import React from "react";
import style from "../../css_modules/profile.module.css";
import {connect} from "react-redux";
import SaveButton from "./MainProfileSaveButton";
import CancelButton from "./MainProfileCancelButton";
import ProfileEmail from "./MainProfileEmail";
import ProfilePhone from "./MainProfilePhone";
import ProfileFBLink from "./MainProfileFBLink";
import AvatarName from "./MainProfileAvatarName";
import Title from "./MainProfileTitle";
import MyProfileButton from "./MainProfileMyProfileButton";
import ActivitiesButton from "./MainProfileActivitiesButton";

class MainProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={`col-12 col-lg-8 pt-2 row no-gutters h-100`}>
                <ActivitiesButton/>
                <MyProfileButton/>
                {/*profile title*/}
                <Title/>
                {/*row avatar + name*/}
                <AvatarName/>
                {/* profile data rows*/}
                <ProfileEmail/>
                <ProfilePhone/>
                <ProfileFBLink/>
                {/*profile buttons save + cancel*/}
                <SaveButton/>
                <CancelButton/>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(MainProfile);