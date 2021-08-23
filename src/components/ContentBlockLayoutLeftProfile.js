import React from 'react'

export default function ContentBlockLayout({imgSource, title, contentText}) {
    return (
        <div className="MainContentClass isLeft animated fadeInLeft faster wow">
            <div className="MainContentBoxClass doLeft">
                <div className="ContentTitleClass"><b>{title}</b></div>
                <hr style={{borderColor: '#eeeeee'}}/>
                <br/>
                <p className="MainContentText" dangerouslySetInnerHTML={{__html: contentText}}>
                </p>
            </div>
            <img className={"ContentImage doRight "+title} alt={title} src={imgSource} />
        </div>
    )
}
