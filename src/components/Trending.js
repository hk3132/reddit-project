import React from 'react'

export default function Trending(props) {
    return (
        <div className="t">
            <div className="tpicture">
                <img src={props.image} alt="news" className="trendingPic"/> 
            </div>
            <div className="titleTrend">
                <h3 className="one">{props.title}</h3>
                <p className="two">{props.description}</p>
                <p className="two">{props.trendinguser}</p>
            </div>
        </div>
    )
}
