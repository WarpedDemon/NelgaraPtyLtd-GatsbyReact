import React from 'react'
import { Link } from 'gatsby'

export default function Footer() {
    return (
        <div id="Footer">
            <div className="column">
                <div className="row">
                    <Link to="/" aria-label="Nelgara logo"><img alt="footer_logo" src="https://www.nelgara.com.au/img/logo.png" className="FooterImage"></img></Link>
                </div>
                <div className="row">
                </div>
                <div className="row">
                </div>
            </div>

            <div className="column">
                <div className="row">
                    <h2><Link to="https://www.nelgara.com.au/" style={{ textDecoration: 'none' }}> Nelgara Pty Ltd </Link></h2>
                </div>
                <div className="row">
                    <div className="copyrightText">Copyright Of Nelgara Pty Ltd 2021 </div>
                </div>
                <div className="row">
                    <Link to="https://www.nelgara.com.au/" id="terms">Terms and Conditions</Link>
                </div>
            </div>

            <div className="column">
                <div className="row">
                </div>
                <div className="row"> 
                    <a to="tel:+61(0)43433161">+61 (0)434 33 161</a>
                </div>
                <div className="row">
                </div>
            </div>
        </div>
    )
}
