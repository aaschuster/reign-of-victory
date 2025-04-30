import React, { useState } from "react";

import './styles/App.css';

import discordLogo from "./discord.png"
import youtubeLogo from "./youtube.png"
import twitchLogo from "./twitch.png"

const discordLink = "https://discord.com/invite/rEWtzeQzNu";
const youtubeLink = "https://youtu.be/e_8MWue2tCs";
const twitchLink = "https://m.twitch.tv/reignofvictorygaming/home?tt_content=channel&tt_medium=mobile_web_share";

function App() {

  const [email, setEmail] = useState("");

  function onChange(evt) {
    setEmail(evt.target.value);
  }

  return (
      <div className="app">
        <header>
          <h1>Reign of Victory</h1>
        </header>
        <div className="links">
          <a className="discordlink" href={discordLink}>
            <div className="discordlinkdiv">
              <img className="discordlogo" src={discordLogo} alt="Discord logo"/>
              <div className="discordtext">
                <p>Join the Discord!</p>
              </div>              
            </div>
          </a>
          <a className="youtubelink" href={youtubeLink}>
            <div className="youtubelinkdiv">
              <img className="youtubelogo" src={youtubeLogo} alt="YouTube logo"/>
              <div className="youtubetext">
                <p>Video tour</p>
              </div>
            </div>
          </a>
          <a className="twitchlink" href={twitchLink}>
            <div className="twitchlinkdiv">
              <img className="twitchlogo" src={twitchLogo} alt="Twitch logo"/>
              <div className="twitchtext">
                <p>Twitch</p>
              </div>
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
