import React from 'react'

export default function ContentBlockLayoutRight({imgSource, title, contentText}) {
    return (
        <div className="MainContentClass animated fadeInRight faster wow">
            <img className="ContentImage" src={imgSource}/>
            <div className="MainContentBoxClass">
                <h3 className="ContentTitleClass"><b>{title}</b></h3>
                <hr style={{borderColor: '#eeeeee'}}/>
                <br/>
                <p className="MainContentText" dangerouslySetInnerHTML={{__html: contentText}}>
                    
                </p>
            </div>
        </div>
    )
}
