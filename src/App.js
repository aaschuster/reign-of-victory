import React, { useState } from "react";

import './styles/App.css';

import discordLogo from "./discord.png"
import { IoMdDownload as DownloadIcon } from "react-icons/io";

const downloadlink = "ReignOfVictory-0-0-3-InDev.zip";

const discordLink = "https://discord.com/invite/rEWtzeQzNu";

function App() {

  const [email, setEmail] = useState("");

  function onChange(evt) {
    setEmail(evt.target.value);
  }

  return (
      <div>
        <header>
          <h1>Reign of Victory</h1>
        </header>
        <p>
          Very early Alpha version of the game "Reign of Victory" released for a premature early access.
          Please provide feedback on the Discord!
        </p>
        <div className="links">
          <a download className="downloadlink" href={downloadlink} >
            <div className="downloadlinkdiv">
              <div className="downloadlinktext">
                <h3>Download</h3>
                <p>.zip file - Windows only </p>
              </div>
              <DownloadIcon className="downloadicon"/>
            </div>
          </a>
          <a className="discordlink" href={discordLink}>
            <div className="discordlinkdiv">
              <p>Join the Discord!</p>
              <img className="discordlogo" src={discordLogo} alt="Discord logo"/>
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
