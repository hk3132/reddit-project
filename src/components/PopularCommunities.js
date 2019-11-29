import React from 'react'

export default function PopularCommunities(props) {
    return (
        <div className="popular">
            <p className="popularText">{props.topic}</p>
            <img className="greyArrow" src={props.arrow} alt="grey arrow"></img>            
        </div>
    )
}
