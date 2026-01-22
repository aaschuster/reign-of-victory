import React, { useState } from "react";

import './styles/App.css';

import discordLogo from "./discord.png"
import youtubeLogo from "./youtube.png"
import twitchLogo from "./twitch.png"
import steamLogo from "./steam.png"
import fbLogo from "./facebook.png"
import xLogo from "./x.png"
import blueskyLogo from "./bluesky.png"
import redditLogo from "./reddit.png"
import tiktokLogo from "./tiktok.png"

import wordmark from "./wordmark.png"
import banner from "./banner.png"
import king from "./king.png"

const discordLink = "https://discord.com/invite/rEWtzeQzNu";
const youtubeLink = "https://www.youtube.com/@reignofvictory";
const twitchLink = "https://m.twitch.tv/reignofvictorygaming/home?tt_content=channel&tt_medium=mobile_web_share";
const steamLink = "https://store.steampowered.com/app/3890650/Reign_of_Victory/?beta=0";
const fbLink = "https://www.facebook.com/people/Reign-of-Victory/61581087128167/";
const xLink = "https://x.com/reign_ofvictory";
const blueskyLink = "https://bsky.app/profile/reignofvictory.bsky.social";
const tiktokLink = "https://www.tiktok.com/@reign_of_victory";
const redditLink ="https://www.reddit.com/r/ReignofVictory/";
const infoText = "Build and trade, fight and conquer or road and steal in this multiplayer open-world RPG where you can choose your own adventure by taking part as a villager, knight or outlaw to become the victor!"

function App() {

  const [email, setEmail] = useState("");

  function onChange(evt) {
    setEmail(evt.target.value);
  }

  return (
      <div className="app" style={{backgroundImage: `url(${banner})`}}>
        <header>
          <img className="wordmark" src={wordmark} alt="Reign of Victory wordmark"/>
        </header>
        <div className="info-links">
          <div className="info">
            <img className="king" src={king} alt="Regal King with a golden crown sitting on a large ornate throne"/>
            <h2>About Reign of Victory</h2>
            <p>{infoText}</p>
          </div>
          <div className="links">
            <h2>Socials</h2>
            <a className="steamlink" href={steamLink}>
              <div className="linkdiv steamlinkdiv">
                <img className="steamlogo" src={steamLogo} alt="Steam logo"/>
                <p>Steam</p>
              </div>
            </a>
            <a className="discordlink" href={discordLink}>
              <div className="linkdiv discordlinkdiv">
                <img className="discordlogo" src={discordLogo} alt="Discord logo"/>
                <p>Discord</p>
              </div>
            </a>
            <a className="fblink" href={fbLink}>
              <div className="linkdiv fblinkdiv">
                <img className="fblogo" src={fbLogo} alt="Facebook logo"/>
                <p>Facebook</p>
              </div>
            </a>
            <a className="xlink" href={xLink}>
              <div className="linkdiv xlinkdiv">
                <img className="xlogo" src={xLogo} alt="X logo"/>
                <p>X</p>
              </div>
            </a>
            <a className="blueskylink" href={blueskyLink}>
              <div className="linkdiv blueskylinkdiv">
                <img className="blueskylogo" src={blueskyLogo} alt="BlueSky logo"/>
                <p>BlueSky</p>
              </div>
            </a>
            <a className="redditlink" href={redditLink}>
              <div className="linkdiv redditlinkdiv">
                <img className="redditlogo" src={redditLogo} alt="Reddit logo"/>
                <p>Reddit</p>
              </div>
            </a>
            <a className="tiktoklink" href={tiktokLink}>
              <div className="linkdiv tiktoklinkdiv">
                <img className="tiktoklogo" src={tiktokLogo} alt="TikTok logo"/>
                <p>Tiktok</p>
              </div>
            </a>
            <a className="youtubelink" href={youtubeLink}>
              <div className="linkdiv youtubelinkdiv">
                <img className="youtubelogo" src={youtubeLogo} alt="YouTube logo"/>
                <p>YouTube</p>
              </div>
            </a>
          </div>
        </div>
        {/* <form className="emailsignupform">
          <label>Sign up for email updates:</label>
          <input onChange={onChange} type="email" value={email}/>
        </form> */}
      </div>    
  );
}

export default App;
