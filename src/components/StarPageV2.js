import React from "react";
import {Link} from "react-router-dom";
import '../AppV2.css'


class StartPageV2 extends React.Component {
    render() {
        return (
            <div className='project'>
                <header className='container'>
                    <div className='row align-items-center h-100'>
                        <div className='col-5 offset-1 col-sm-5 offset-sm-1 col-lg-4 offset-lg-1'>
                            <div className='logo'>
                            </div>
                        </div>
                        <div className='col-3 offset-2 col-lg-2 offset-lg-4'>
                            <button className='signIn'>
                                <span className='signInText'>Sign in</span>
                            </button>
                        </div>
                    </div>
                </header>


                <main className='container'>
                    <div className='row  h-100'>
                        <div className='col-5 col-lg-5 row'>
                            <div className='welcomeText col-12'>
                                <div className='line1'> Welcome to your</div>
                                <div className='line2'>pawfessional</div>
                                <div className='line3'> community</div>
                            </div>
                                <button className='lost_button'> {/*//use linkto='/signup'*/}
                                    <div className='lost_text'>
                                        <span className='firstText'>I lost my pet!</span>
                                        <span className='secondText'>Click to find!</span>
                                    </div>
                                    <div className='lost_logo'>
                                    </div>
                                </button>
                                <div className='found_button'>
                                    <div className='found_text'>
                                        <span className='firstText'>I found a pet!</span>
                                        <span className='secondText'>What to do?</span>
                                    </div>
                                </div>
                        </div>
                        <div className='col-6 offset-1'>
                            <div className='image'>
                            </div>
                        </div>

                    </div>

                </main>
                {/*<div className='textBox'>*/}
                {/*    <p className='text'>*/}
                {/*        I’m okay, just want to</p>*/}
                {/*    <span className='join'> join </span>*/}
                {/*    <p className='text1'>the pawsome community!</p>*/}
                {/*</div>*/}


                {/*<main className='middleTextArea'>*/}
                {/*    <div className='middleText'>*/}
                {/*        Our fluffy space for lovers, admirers, dads*/}
                {/*        and moms of our four-legged, winged, tailed guys.*/}
                {/*    </div>*/}
                {/*</main>*/}
                {/* </main>*/}
                {/* <div className='info'>
                    <div className='imageInfo'>
                    </div>
                    <div className='textInfo'>
                        <h2>Here is collected everything that your pet needs:</h2>
                        <ul className='listText'>
                            <li>professional veterinarian tips;</li>
                            <li>useful information about education and care;</li>
                            <li>fostering home search;</li>
                            <li>information about pet-sitting and walking service;</li>
                            <li>and of course, great communication with<br/>
                                new friends in your social network!
                            </li>
                        </ul>
                    </div>
                </div>


                <div className='footer1'>
                    <div className='footer1Text1'>Coming soon</div>
                    <div className='footer1Text2'>We are planing to open a new service,<br/>
                        where your cats and dogs can find their love!
                    </div>
                    <div className='footer1Image'>
                        <span>LOVE</span>
                    </div>
                </div>


                <div className='footer2'>
                    <div id='proPetsLogo'>
                    </div>
                    <div>
                        <div id='facebookLogo'>
                        </div>
                        <div id='instagramLogo'>
                        </div>
                    </div>
                    <div id='addressInfo'>
                        1600 Amphitheatre Pkwy
                        Mountain View, CA 94043, USA
                    </div>

                    <div className='lostIcon'>
                    </div>
                    <span className='lostText'>Lost</span>
                    <div className='foundIcon'>
                    </div>
                    <span className='foundText'>Found</span>
                    <div className='vetIcon'>
                    </div>
                    <span className='vetText'>VetHelp</span>


                    <div className='hotelsIcon'>
                    </div>
                    <span className='hotelsText'>Hotels</span>
                    <div className='walkingIcon'>
                    </div>
                    <span className='walkingText'>Walking</span>
                    <div className='fosteringIcon'>
                    </div>
                    <span className='fosteringText'>Fostering</span>
                </div>*/}
            </div>

        );
    }
}

export default StartPageV2;