import React from 'react'

class Options2 extends React.Component {
    render() {
      return <div className="optionsContainer">
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
          <div className="linky">
            <button id="optionsButton" onClick={this.handleClick}>
            <img
            className="profile"
            src="http://ukcontingent.co.uk/wp-content/uploads/2017/05/grey_person_icon.png"
            alt="profile"></img>
            <img
            className="triangle"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/MediaWiki_Vector_skin_action_arrow.svg/500px-MediaWiki_Vector_skin_action_arrow.svg.png"
          alt="triangle"></img>
        </button>
        <div/>
          <div className={`optionsMenu ${open ? 'open' : ''}`}>
          <ul>
            <div className="optionsDropdownListItems">
            <h5 id="menuTitle">VIEW OPTIONS</h5>
              <div id="imageAndli2">
              <img
                id="menuicon"
                src="https://cdn3.iconfinder.com/data/icons/neptune-basis-1/48/001_029_moon_night_sleep_mode-512.png"
              alt="trendingLogo"></img>
              <li> Night Mode </li>
              {/* toggle button here */}
              </div>
            <h5 id="menuTitle">MORE STUFF</h5>
            <div id="imageAndli2">
              <img id="menuicon" src="https://cdn3.iconfinder.com/data/icons/business-vol-2-part-1/64/_Copy_Right-512.png" alt=""></img>
              <li>Reddit Coins</li>
            </div>
            <div id="imageAndli2">
              <img id="menuicon" src="https://i.redd.it/q1n74m6hees11.png" alt=""></img>
              <li>Reddit Premium</li>
            </div>
            <div id="imageAndli2">
              <img id="menuicon" src="data:image/jpeg;base64,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" alt=""></img>
              <li>Help Centre</li>
              <img id="exportLogo" src="http://sepadbf.com/assets_site/img/basic_photo/forma1.png" alt=""></img>
            </div>
            <hr></hr>
            <div id="imageAndli2">
              <img id="menuicon" src="https://www.freeiconspng.com/uploads/black-login-icon--0.png" alt=""></img>
              <li>Log In / Sign Up</li>
            </div>
            </div>
          </ul>
          </div>
          </div>
      )
    }
  }
export default Options2;