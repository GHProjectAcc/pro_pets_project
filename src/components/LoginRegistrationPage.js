import React from "react";
import '../LoginRegistration.css'

class LoginRegistrationPage extends React.Component {
    render() {
        return (
            <div className='loginPage'>
                <div className='form'>
                    <div className='loginLogo'>
                    </div>
                    <div className='loginWelcome'>
                        <p>Welcome! Please sign in / sign up to continue or</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default LoginRegistrationPage;