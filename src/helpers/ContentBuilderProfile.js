import ContentBlockLayoutRight from "../components/ContentBlockLayoutRightProfile"
import ContentBlockLayoutLeft from "../components/ContentBlockLayoutLeftProfile"
import React from 'react'


export default function ContentBuilder({titles, texts, imgs}) {
    var data = [];
    for(var i = 0; i < titles.length; i++) {
        var thisTitle = titles[i];
        var thisText = texts[i];
        var thisImg = imgs[i];
        var evenBuild = (i % 2 === 0);

        if(evenBuild) {
            data.push(<ContentBlockLayoutRight key={"myKey" + i} title={thisTitle} contentText={thisText} imgSource={thisImg}></ContentBlockLayoutRight>)
        } else {
            data.push(<ContentBlockLayoutLeft key={"myKey" + i} title={thisTitle} contentText={thisText} imgSource={thisImg}></ContentBlockLayoutLeft>)
        }
    }
    return (
        data
    )
}
