import React from "react";
import style from '../css_modules/registrationPage.module.css'
import styleLogin from '../css_modules/loginPage.module.css'
import history from "../history";
import {Link} from "react-router-dom";

class LoginPage extends React.Component {
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
                        <div className={styleLogin.signUpButton} onMouseOver={() => {
                            history.push('/signup')
                        }}>
                            <span>Sign up</span>
                        </div>
                        <div className={styleLogin.signInButton}>
                            <span>Sign in</span>
                        </div>
                        <div className={style.email}><span>Email:</span><input placeholder=''/></div>
                        <div className={style.password}><span>Password:</span><input placeholder=''/></div>
                        <span className={style.forgotPassword}>
                                Forgot password?
                            </span>

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

export default LoginPage;