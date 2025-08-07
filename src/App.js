import React, { useState } from "react";

import './styles/App.css';

import discordLogo from "./discord.png"
import youtubeLogo from "./youtube.png"
import twitchLogo from "./twitch.png"
import steamLogo from "./steam.png"

import wordmark from "./wordmark.png"
import banner from "./banner.png"
import king from "./king.png"

const discordLink = "https://discord.com/invite/rEWtzeQzNu";
const youtubeLink = "https://youtu.be/fB9uTvCWwlw";
const twitchLink = "https://m.twitch.tv/reignofvictorygaming/home?tt_content=channel&tt_medium=mobile_web_share";
const steamLink = "https://store.steampowered.com/app/3890650/Reign_of_Victory/?beta=0";

function App() {

  const [email, setEmail] = useState("");

  function onChange(evt) {
    setEmail(evt.target.value);
  }

  return (
      <div className="app" style={{backgroundImage: `url(${banner})`}}>
        <header>
          <img className="king" src={king} alt="Regal King with a golden crown sitting on a large ornate throne"/>
          <img className="wordmark" src={wordmark} alt="Reign of Victory wordmark"/>
        </header>
        <div className="links">
          <a className="steamlink" href={steamLink}>
            <div className="linkdiv steamlinkdiv">
              <img className="steamlogo" src={steamLogo} alt="Steam logo"/>
              <p>Wishlist Now!</p>
            </div>
          </a>
          <a className="discordlink" href={discordLink}>
            <div className="linkdiv discordlinkdiv">
              <img className="discordlogo" src={discordLogo} alt="Discord logo"/>
              <p>Join the Discord!</p>
            </div>
          </a>
          <a className="youtubelink" href={youtubeLink}>
            <div className="linkdiv youtubelinkdiv">
              <img className="youtubelogo" src={youtubeLogo} alt="YouTube logo"/>
              <p>Trailer</p>
            </div>
          </a>
          <a className="twitchlink" href={twitchLink}>
            <div className="linkdiv twitchlinkdiv">
              <img className="twitchlogo" src={twitchLogo} alt="Twitch logo"/>
              <p>Twitch</p>
            </div>
          </a>
        </div>
        {/* <form className="emailsignupform">
          <label>Sign up for email updates:</label>
          <input onChange={onChange} type="email" value={email}/>
        </form> */}
      </div>    
  );
}

export default App;
