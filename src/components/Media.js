import React from 'react'

export default function Media(props) {
    return (
        <div className="m">
            <div className="mpicture">
                <img src={props.image} alt="news" className="mediaPic"/> 
            </div>
            <div className="titleMedia">
                <h3 className="oneone">{props.title}</h3>
                <p className="twotwo">{props.description}</p>
                <p className="threethree">{props.trendinguser}</p>
            </div>
        </div>
    )
}
