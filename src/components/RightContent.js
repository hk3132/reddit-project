import React from 'react'

export default function RightContent(props) {

    const arrow = "https://upload.wikimedia.org/wikipedia/commons/3/36/Up_green_arrow.png"
    
    return (
        <div className="topGrowing">
            <div className="Accounts">
                <p>{props.num}</p>
                <img className="ArrowImg" src={arrow} alt="green arrow"></img>
                <img className="profileImg" src={props.pic} alt="profile pic"></img>
                <p>{props.name}</p>
            </div>

        </div>
    )
}

