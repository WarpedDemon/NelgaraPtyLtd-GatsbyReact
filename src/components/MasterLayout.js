import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
import Banner from "./Banner"
import {Helmet} from "react-helmet";


import "../styles/LandingPage.css"
import "../styles/Mobile.css"
import "../styles/Extras.css"
import "../styles/animate.css"



export default function MasterLayout({ children, title }) {

    return (

        <div className="MasterLayout">
            <Helmet>

                <meta charset="utf-8"/>
                <meta name="google-site-verification" content="txgKmeRnG--tbzmjs6dsxKpFw-x3RCL2t_jCDioBfDo" />
                <meta name="google-site-verification" content="xkHDb2_zgTzNpDumgrN7J39GOzcAilbnu3ZnP9G_Q8A" />
                <meta property="title" content={title+" | Nelgara Pty Ltd"}/>
                <meta name="description" content="Nelgara Pty Ltd is an Australian commercial management consulting firm
                that leverages its significant industry experience to develop and apply
                best practice solutions."/>
                <meta name="keywords" content="HTML, CSS, XML, JavaScript, Php, Nelgara, Nick, Noonan, Commercial, Construction, Services, Peter, Hooks, Katherine, James, Australian, Australia, Perth, Kallaroo, nelgara, australia, contruction services perth"/>
                <meta name="author" content="James Nicholas Noonan"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta property="url" content="https://nelgara.com.au"/>
                <meta property="type" content="website"/>
                <meta property="site_name" content="Commercial Project Management Solutions | Nelgara Pty Ltd"/>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"/>

            </Helmet>
            <Navbar />
            <Banner title={title}/>
            <div className="mainContent">
                { children }
            </div>
            <Footer/>
        </div>
    )
}
