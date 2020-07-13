import React from "react";
import style from "../../css_modules/profile.module.css";

const Footer = () => (
    <div className={`${style.footer} row justify-content-center`}>
        <div className={`${style.footerLogo} col-6  pt-5`}>
        </div>
        <div className={`${style.address} pt-lg-4`}>
            <span className='d-block'>1600 Amphitheatre Pkwy Mountain View, </span>
            <span className='d-block'>CA 94043,USA</span>
        </div>
    </div>
);

export default Footer;