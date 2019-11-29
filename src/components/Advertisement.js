import React from 'react'

export default function Advertisement(props) {

    return (
        <div className="ad">
            <div className="adText">
                <p>ADVERTISEMENT</p>
            </div>
            <div className="adImg">
                <img src={props.img} alt="ad" ></img>
            </div>
        </div>
    )
}
