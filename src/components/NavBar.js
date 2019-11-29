import React from 'react'
import SearchBar from './SearchBar'
import Options2 from './Options2'
import Popular2 from './Popular2'
import PopularLogo from "../img/PopularLogo.png"
import viewImg from "../img/Screenshot5.png"
import sortImg from "../img/Screenshot6.png"
import ukImg from "../img/Screenshot7.png"


export default function NavBar() {
    return (
      <div className="headerContainer">
        <div className="topHeader">
          <div className="header1">
            <img
              className="redditLogo"
              src="https://logos-download.com/wp-content/uploads/2016/06/Reddit_logo_full_1.png"
              alt="reddit logo"
            ></img>
            <Popular2 />
            <SearchBar />
          </div>
          <div className="header2">
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
              <button className="loginButton">LOG IN</button>
              <button className="signupButton">SIGN UP</button>
            </div>
            <Options2 />
          </div>
        </div>
        <div className="bottomHeader"> 
            <div className="navImage1">
                <img src={viewImg} alt="nav"/>
            </div>
            <div className="navImage2">
                <img src={sortImg} alt="nav"/>
            </div>
            <div className="navImage3">
                <img src={ukImg} alt="nav"/>
            </div>
      </div>
      </div>
    );
}
