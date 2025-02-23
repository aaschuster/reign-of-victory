import './styles/App.css';

import discordLogo from "./discord.png"
import { IoMdDownload as DownloadIcon } from "react-icons/io";

const downloadlink = "ReignOfVictory-0-0-3-InDev.zip";

const discordLink = "https://discord.com/invite/rEWtzeQzNu";

function App() {
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
            <p>Download</p>
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
    </div>
  );
}

export default App;
