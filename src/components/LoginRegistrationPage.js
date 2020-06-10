import React from "react";
import '../LoginRegistration.css'

class LoginRegistrationPage extends React.Component {
    render() {
        return (
            <div className='loginPage container'>
                <div className='form '>
                    <div className='loginLogo'>
                    </div>
                    <div className='loginWelcome'>
                        <span><b>Welcome!</b> Please sign in / sign up to continue </span>
                    </div>
                    <div className='registrationForm'>
                        <div className='signUpButton'>
                            <span>Sign up</span>
                        </div>
                        <div className='signInButton'>
                            <span>Sign in</span>
                        </div>
                        <div className='name'><span>Name:</span><input placeholder=''/></div>
                        <div className='email'><span>Email:</span></div>
                        <div className='password'><span>Password:</span></div>
                        <div className='passwordConfirm'><span>Password:</span></div>

                    </div>

                </div>
            </div>
        );
    }
}

export default LoginRegistrationPage;