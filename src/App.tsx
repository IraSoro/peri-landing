import { useState, useEffect } from "react";

import Phone from "./assets/phone.png";
import GooglePlayIcon from "./assets/GooglePlayIcon.png";
import GitHubIcon from "./assets/github-logo.png";

import "./App.css";
import "./styles/Buttons.css";

const Header = () => {
  const [underline, setUnderline] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setUnderline(true);
      } else {
        setUnderline(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${underline ? "header-underline" : ""}`}>
      <div className="logo">
        <img src="/favicon.ico" alt="Logo" />
        <span className="logo-text">Peri</span>
      </div>
    </header>
  );
};

const GooglePlayButton = () => {
  return (
    <a className="btn" href="#">
      <img src={GooglePlayIcon} alt="Google Play Icon" />
      <div className="btn-text">
        <span className="small-text">GET IT ON</span>
        <span className="big-text">Google Play</span>
      </div>
    </a>
  );
};

const GitHubButton = () => {
  return (
    <a className="btn" href="#">
      <img src={GitHubIcon} alt="GitHub Icon" />
      <div className="btn-text">
        <span className="small-text">GO TO</span>
        <span className="big-text">GitHub</span>
      </div>
    </a>
  );
};

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="centered-box">
          <div className="description-and-image">
            <div className="description">
              <h1>Description</h1>
              <p>Here is additional text or information about something.</p>
              <div className="button-container">
                <GooglePlayButton />
                <GitHubButton />
              </div>
            </div>
            <div className="image-box">
              <img src={Phone} alt="Image description" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
