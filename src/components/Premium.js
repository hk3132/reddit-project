import React from 'react'
import shieldImage from "../img/Screenshot2.png"

export default function Premium() {
    return (
        <div className="premium">
            <div className="premiumImage">
                <img src={shieldImage} alt="pic"></img>
            </div>
            <div className="premiumText">
                <p className="premiumTextHeading">Reddit Premium</p>
                <p>The best Reddit experience, with monthly Coins</p>
            </div>
            <div className="premiumButton">
                <button className="tryNowBtn">TRY NOW</button>
            </div>
        </div>
    )
}
