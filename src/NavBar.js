import logo from "./assets/travel-logo2.webp";
import { Link, useNavigate } from "react-router-dom";
import useUser from "./hooks/useUser";
import { getAuth, signOut } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebookF,
  faFlickr,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

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
                <a
                  href="https://github.com/Gorky1985"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="social-icons">
                    <FontAwesomeIcon icon={faGithub} />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/goran.cosic.71"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="social-icons">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.flickr.com/photos/94000386@N05/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="social-icons">
                    <FontAwesomeIcon icon={faFlickr} />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mag-goran-cosic/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="social-icons">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default NavBar;
