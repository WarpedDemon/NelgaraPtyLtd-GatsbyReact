import React from 'react'

export default function ContentBlockLayoutRight({imgSource, title, contentText}) {
    return (
        <div className="MainContentClass animated fadeInRight faster wow">
            <img className={"ContentImage  "+title} alt={title} src={imgSource}/>
            <div className="MainContentBoxClass">
                <div className="ContentTitleClass"><b>{title}</b></div>
                <hr style={{borderColor: '#eeeeee'}}/>
                <br/>
                <p className="MainContentText" dangerouslySetInnerHTML={{__html: contentText}}>

                </p>
            </div>
        </div>
    )
}
