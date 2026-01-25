import ImageGallery from "react-image-gallery";

import './styles/App.css';

import discordLogo from "./logos/discord.png"
import youtubeLogo from "./logos/youtube.png"
import steamLogo from "./logos/steam.png"
import fbLogo from "./logos/facebook.png"
import xLogo from "./logos/x.png"
import blueskyLogo from "./logos/bluesky.png"
import redditLogo from "./logos/reddit.png"
import tiktokLogo from "./logos/tiktok.png"
import driveLogo from "./logos/drive.png"

import screenshot1 from "./screenshots/screenshot1.png"
import screenshot2 from "./screenshots/screenshot2.png"
import screenshot3 from "./screenshots/screenshot3.png"
import screenshot4 from "./screenshots/screenshot4.png"

import wordmark from "./wordmark.png"
import king from "./king.png"

const screenshots = [
  {original: screenshot1},
  {original: screenshot2},
  {original: screenshot3},
  {original: screenshot4}
]

const discordLink = "https://discord.com/invite/rEWtzeQzNu";
const youtubeLink = "https://www.youtube.com/@reignofvictory";
const steamLink = "https://store.steampowered.com/app/3890650/Reign_of_Victory/?beta=0";
const fbLink = "https://www.facebook.com/people/Reign-of-Victory/61581087128167/";
const xLink = "https://x.com/reign_ofvictory";
const blueskyLink = "https://bsky.app/profile/reignofvictory.bsky.social";
const tiktokLink = "https://www.tiktok.com/@reign_of_victory";
const redditLink ="https://www.reddit.com/r/ReignofVictory/";
const presskitLink = "https://drive.google.com/drive/folders/1GQ_QkLdxIjPuU0_SRJUTXTn7QObsjtw0?usp=sharing";
const infoText = "Build and trade, fight and conquer or road and steal in this multiplayer open-world RPG where you can choose your own adventure by taking part as a villager, knight or outlaw to become the victor!"

function App() {

  // const [email, setEmail] = useState("");

  // function onChange(evt) {
  //   setEmail(evt.target.value);
  // }

  return (
      <div className="app">
        <header>
          <img className="wordmark" src={wordmark} alt="Reign of Victory wordmark"/>
        </header>
        <a className="wishlistlink link" href={steamLink}>
          <div className="linkdiv wishlistlinkdiv">
            <img className="steamlogo logo" src={steamLogo} alt="Steam logo"/>
            <h2>Wishlist Now!</h2>
          </div>
        </a>
        <ImageGallery 
          className="gallery"
          items={screenshots}
          autoPlay={true}
          showBullets={true}
          slideDuration={300}
          slideInterval={7000}
        />
        <div className="info-links">
          <div className="info">
            <div className="about">
              <img className="king" src={king} alt="Regal King with a golden crown sitting on a large ornate throne"/>
              <div className="infotext">
                <h2>About Reign of Victory</h2>
                <p>{infoText}</p>
              </div>
            </div>
            <div className="contact">
              <h3>Contact Me</h3>
              <p>benjaminjoelschuster@gmail.com</p>
            </div>
            <a className="presskit link" href={presskitLink}>
                <div className="linkdiv presskitlinkdiv">
                  <img className="drivelogo logo" src={driveLogo} alt="Google Drive logo"/>
                  <h4>Press Kit</h4>
                </div>
            </a> 
          </div>          
          <div className="links">
            <div className="socialstitle">
              <h2>Socials</h2>
            </div>
            <a className="steamlink link" href={steamLink}>
              <div className="linkdiv steamlinkdiv">
                <img className="steamlogo logo" src={steamLogo} alt="Steam logo"/>
                <p>Steam</p>
              </div>
            </a>
            <a className="discordlink link" href={discordLink}>
              <div className="linkdiv discordlinkdiv">
                <img className="discordlogo logo" src={discordLogo} alt="Discord logo"/>
                <p>Discord</p>
              </div>
            </a>
            <a className="fblink link" href={fbLink}>
              <div className="linkdiv fblinkdiv">
                <img className="fblogo logo" src={fbLogo} alt="Facebook logo"/>
                <p>Facebook</p>
              </div>
            </a>
            <a className="xlink link" href={xLink}>
              <div className="linkdiv xlinkdiv">
                <img className="xlogo logo" src={xLogo} alt="X logo"/>
                <p>X</p>
              </div>
            </a>
            <a className="blueskylink link" href={blueskyLink}>
              <div className="linkdiv blueskylinkdiv">
                <img className="blueskylogo logo" src={blueskyLogo} alt="BlueSky logo"/>
                <p>BlueSky</p>
              </div>
            </a>
            <a className="redditlink link" href={redditLink}>
              <div className="linkdiv redditlinkdiv">
                <img className="redditlogo logo" src={redditLogo} alt="Reddit logo"/>
                <p>Reddit</p>
              </div>
            </a>
            <a className="tiktoklink link" href={tiktokLink}>
              <div className="linkdiv tiktoklinkdiv">
                <img className="tiktoklogo logo" src={tiktokLogo} alt="TikTok logo"/>
                <p>Tiktok</p>
              </div>
            </a>
            <a className="youtubelink link" href={youtubeLink}>
              <div className="linkdiv youtubelinkdiv">
                <img className="youtubelogo logo" src={youtubeLogo} alt="YouTube logo"/>
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
