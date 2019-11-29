import React from 'react'
import SearchBar from './SearchBar'
import Options2 from './Options2'
import Popular2 from './Popular2'
import PopularLogo from "../img/PopularLogo.png"
import bottom from "../img/bottom.png"


export default function NavBar() {
    return (
        <div>
        <div className="topHeader1">
          <div className="header2">
            <img
              className="redditLogo1"
              src="https://external-preview.redd.it/iDdntscPf-nfWKqzHRGFmhVxZm4hZgaKe5oyFws-yzA.png?auto=webp&s=38648ef0dc2c3fce76d5e1d8639234d8da0152b2"
              alt="reddit logo"
            ></img>
            <Popular2 />
            <SearchBar />
            <div className="navButtons">
              <img className="navButton" src={PopularLogo} alt="button"></img>
              <img
                className="navButton"
                src="https://www.freeiconspng.com/uploads/arrow-chart-graph-profit-report-rising-up-icon-9.png"
                alt="button"
              ></img>
              <img
                className="navButton"
                src="https://vignette.wikia.nocookie.net/logopedia/images/4/40/RPAN_icon.svg/revision/latest/scale-to-width-down/150?cb=20190901014859"
                alt="button"
              ></img>
            </div>
            <div className="loginSignup">
              <button className="loginButton">Log In</button>
              <button className="signupButton">Sign Up</button>
            </div>
            <Options2 />
          </div>
        </div>
        <div className="bottomHeader1"> 
            <div className="navImage">
                <img src={bottom} alt="view"/>
            </div>
      </div>
      </div>
        
    );
}
