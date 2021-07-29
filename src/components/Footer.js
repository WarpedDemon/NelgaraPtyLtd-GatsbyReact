import React from 'react'
import { Link } from 'gatsby'

export default function Footer() {
    return (
        <div id="Footer">
            <div className="column">
                <div className="row">
                    <Link to="/index"><img src="img/logo.png" className="FooterImage"></img></Link>
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
                    <h6 className="copyrightText">Copyright &#169 Nelgara Pty Ltd 2021 </h6>
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
