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
                    <h2><Link to="/index" style={{ textDecoration: 'none' }}> Nelgara Pty Ltd </Link></h2>
                </div>
                <div className="row">
                    <div className="copyrightText">Copyright &copy Nelgara Pty Ltd 2021 </div>
                </div>
                <div className="row">
                    <Link to="/index" id="terms">Terms and Conditions</Link>
                </div>
            </div>

            <div className="column">
                <div className="row">
                </div>
                <div className="row">
                    <Link to="/index">TEL: +61 (0)434 33 161</Link>
                </div>
                <div className="row">
                </div>
            </div>
        </div>
    )
}
