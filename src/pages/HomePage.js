import { Link } from "react-router-dom";
import Footer from "../Footer";

const HomePage = () => {
  return (
    <div className="max-width">
      <section className="intro-box">
        <div>
          <img
            src="./assets/hero1.webp"
            alt="sunset in Vienna"
            height="auto"
            srcSet={`
    ./assets/hero1-xsmall.webp 480w,
    ./assets/hero1-small.webp 960w,
    ./assets/hero1-med.webp 1440w,
    ./assets/hero1.webp 1920w
  `}
            sizes="
    (max-width: 480px) 480px,
    (max-width: 960px) 960px,
    (max-width: 1440px) 1440px,
    1920px
  "
            preload="auto"
          />
        </div>
        <div className="divider">
          <img src="./assets/divider.webp" alt="" />
        </div>
        <div className="hello">
          <p>
            Hi, I'm Goran. Welcome to my travel blog! Whether you're a seasoned
            globetrotter or a novice explorer, I'm thrilled to have you here.
            Join me on this journey as we embark on adventures around the world.
          </p>
          <p>
            Let's explore new destinations, uncover hidden gems, and create
            unforgettable memories together. Thanks for visiting, and let's have
            some fun exploring the wonders of travel together!
            <Link className="link" to="/about">
              Read more
            </Link>
          </p>
        </div>
      </section>
      <main id="content" className="main-area">
        <div className="title">
          <p>TRAVEL BLOG</p>
          <h1>LATEST</h1>
        </div>
        <ul className="cards">
          <li className="card-item double">
            <Link to="/articles/vienna">
              <figure className="card">
                <img
                  src="./assets/vienna-opera.webp"
                  alt="Vienna Opera at night"
                />
                <figcaption className="caption">
                  <h3 className="caption-title">Vienna Opera</h3>
                  <p>Exploring beautiful city of Vienna</p>
                </figcaption>
              </figure>
            </Link>
          </li>
          <li className="card-item">
            <Link to="/articles/makarska">
              <figure className="card">
                <img
                  src="./assets/makarska-thumb.webp"
                  alt="Makarska at night"
                />
                <figcaption className="caption">
                  <h3 className="caption-title">Makarska</h3>
                  <p>Makarska - a true jewel on adriatic coast.</p>
                </figcaption>
              </figure>
            </Link>
          </li>
          <li className="card-item">
            <Link to="/articles/venice">
              <figure className="card">
                <img
                  src="./assets/venice-thumb.webp"
                  alt="Venice and gondola"
                />
                <figcaption className="caption">
                  <h3 className="caption-title">Venice</h3>
                  <p>One magical place.</p>
                </figcaption>
              </figure>
            </Link>
          </li>
          <li className="card-item">
            <Link to="/articles/seget-vranjica">
              <figure className="card">
                <img
                  src="./assets/seget-vranjica-thumb.webp"
                  alt="Adria harbor with ships"
                />
                <figcaption className="caption">
                  <h3 className="caption-title">Seget Vranjica</h3>
                  <p>Small village on the coast of Adria.</p>
                </figcaption>
              </figure>
            </Link>
          </li>
        </ul>
        <Link to="/articles" className="more">
          <span>READ MORE ARTICLES</span>
          <span className="material-icons">description</span>
        </Link>
      </main>
      <aside className="intro-box black-box">
        <div className="divider-top">
          <img src="./assets/divider.webp" alt="" />
        </div>
        <div>
          <img
            src="./assets/hero2.webp"
            alt="Vienna from a hill at night"
            height="auto"
            srcSet={`
    ./assets/hero2-xsmall.webp 480w,
    ./assets/hero2-small.webp 960w,
    ./assets/hero2-med.webp 1440w,
    ./assets/hero2.webp 1920w
  `}
            sizes="
    (max-width: 480px) 480px,
    (max-width: 960px) 960px,
    (max-width: 1440px) 1440px,
    1920px
  "
            loading="lazy"
          />
        </div>
        <div className="goran">
          <img
            src="./assets/me.webp"
            alt="Goran Cosic, the author of this blog"
          />
        </div>
        <div className="arrow_box">
          <h3>HEY, I'M GORAN....</h3>
          <p>
            ...welcome to my travel blog! I'm excited to have you join me for
            some fun adventures. Thanks for visiting and let's explore the world
            together!
          </p>
          <Link to="/about" className="more">
            <span>About me</span>
            <span className="material-icons">local_see</span>
          </Link>
        </div>
      </aside>
      <Footer />
    </div>
  );
};

export default HomePage;
