import React from 'react'
import PopularLogo from "../img/PopularLogo.png"
import PopularSearch from "./PopularSearchBar"

class Popular2 extends React.Component {
    render() {
      return <div className="popularContainer">
        <Link />
      </div>;
    }
  }
  
  class Link extends React.Component {
      state = {
        open: false
    }
    handleClick = () => {
        this.setState({ open: !this.state.open });
    }
    render () {
        const { open } = this.state;
        return (
          <div className="popularButton" onClick={this.handleClick}>
            <img
              className="popularLogo"
              id="popularComp"
              src={PopularLogo}
              alt="trendingLogo"
            ></img>
            <h3 id="popularh3">Popular</h3>
            <img
              className="triangle1"
              id="popularComp"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/MediaWiki_Vector_skin_action_arrow.svg/500px-MediaWiki_Vector_skin_action_arrow.svg.png"
              alt="triangle"
            ></img>
            <div />

            <div className={`menu ${open ? "open" : ""}`}>
                <PopularSearch/>
              <ul>
                
                <div className="popularDropdownListItems">
                <h5 id="menuTitle">REDDIT FEEDS</h5>
            <div id="imageAndli">
                  <img
                    id="menuicon"
                    src={PopularLogo}
                    alt="trendingLogo"
                  ></img>
                  <li> Popular </li>
                </div>
                <div id="imageAndli" >
                  <img id="menuicon"src="https://www.freeiconspng.com/uploads/arrow-chart-graph-profit-report-rising-up-icon-9.png" alt=""></img>
                  <li>All</li>
                </div>
                <div id="imageAndli">
                <img id="menuicon" src="https://img.icons8.com/office/452/numbered-list.png" alt="menu"></img>
                <li>Top Communities</li>
                </div>
                <h5 id="menuTitle">OTHER</h5>
                <div id="imageAndli">
                <img id="menuicon" src="http://www.freepngclipart.com/download/circle/59553-gold-bottom-gold,-computer-file-circle-round.png" alt="menu"></img>
                <li>Coins</li>
                </div>
                <div id="imageAndli">
                <img id="menuicon" src="https://i.redd.it/q1n74m6hees11.png" alt="menu"></img>
                <li>Premium</li>
                </div>
                </div>
              </ul>
              <div/>
            </div>
          </div>
        );
    }
  }
export default Popular2;