import logo from "./assets/travel-logo2.webp";
import inLogo from "./assets/linkedInLogo.png";
import youTubeLogo from "./assets/youTube2.png";
import twitLogo from "./assets/twitter.png";
import faceLogo from "./assets/face.png";
import instaLogo from "./assets/insta.png";
import { Link, useNavigate } from "react-router-dom";
import useUser from "./hooks/useUser";
import { getAuth, signOut } from "firebase/auth";

const NavBar = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  return (
    <header>
      <section className="menu-section menu">
        <div className="nav-mixed">
          <div className="logo-wrap">
            <Link to="/">
              <img className="logo" src={logo} alt="travel logo" />
            </Link>
          </div>
          <nav className="main-nav" role="navigation">
            <ul>
              <li>
                <Link className="icons" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="icons" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="icons" to="/articles">
                  Articles
                </Link>
              </li>
              <li>
                {user ? (
                  <button
                    className="btn"
                    onClick={() => {
                      signOut(getAuth());
                    }}
                  >
                    Log Out
                  </button>
                ) : (
                  <button
                    className="btn"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Log In
                  </button>
                )}
              </li>
            </ul>
          </nav>
          <nav id="social-menu" className="social-menu menu" role="navigation">
            <ul>
              <li>
                <Link to="https://www.twitter.com">
                  <img className="icons" src={twitLogo} alt="Twitter Logo" />
                </Link>
              </li>
              <li>
                <Link to="https://www.facebook.com">
                  <img className="icons" src={faceLogo} alt="Facebook Logo" />
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com">
                  <img className="icons" src={instaLogo} alt="Instagram Logo" />
                </Link>
              </li>
              <li>
                <Link to="https://www.youtube.com">
                  <img className="icons" src={youTubeLogo} alt="YouTube Logo" />
                </Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com">
                  <img className="icons" src={inLogo} alt="LinkedIn Logo" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default NavBar;
