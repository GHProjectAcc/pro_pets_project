import React from "react";
import style from '../../css_modules/registrationPage.module.css'
import history from "../../history";
import {Link} from "react-router-dom";

class RegistrationPage extends React.Component {


    render() {
        return (
            <div className={`${style.loginPage} container`}>
                <div className={style.form}>
                    <div className={style.loginLogo}>
                    </div>
                    <Link to='/startpage'>
                        <span className={style.exitButton}>x</span>
                    </Link>
                    <span className={style.textWelcome}><b>Welcome!</b> Please sign in / sign up to continue </span>

                    <div className={style.registrationForm}>
                        <div className={style.signUpButton}>
                            <span>Sign up</span>
                        </div>
                        <div className={style.signInButton} onMouseOver={() => {
                            history.push('/signin')
                        }}>
                            <span>Sign in</span>
                        </div>
                        <div className={style.name}><span>Name:</span><input placeholder=''/></div>
                        <div className={style.email}><span>Email:</span><input placeholder=''/></div>
                        <div className={style.password}><span>Password:</span><input placeholder=''/></div>
                        <div className={style.passwordConfirm}><span>Password:</span><input placeholder=''/></div>
                        <div className={style.passwordSpecification}>
                            <span>
                                Password must have at least 8 characters with at least one Capital letter,
                                at least one lower case letter and at least one number or special character.
                            </span>
                        </div>
                        <div className={style.passwordConfirmText}>
                            <span>
                                Please re-enter your password
                            </span>
                        </div>
                    </div>

                    <div className={style.line}>
                    </div>
                    <div className={style.privacyPolicy}>
                        <span>
                            By clicking “Submit”, you agree to us processing
                            your information in accordance with these terms.
                        </span>
                    </div>
                    <button className={style.cancelButton}>
                        <span>Cancel</span>
                    </button>
                    <button className={style.submitButton}>
                        <div className={style.logoSubmitButton}>
                        </div>
                        <span>Submit</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default RegistrationPage;