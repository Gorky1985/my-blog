import { Link } from "react-router-dom";
import Footer from "../Footer";

const HomePage = () => {
  return (
    <div className="max-width">
      <section className="intro-box">
        <div>
          <img src="./assets/hero1.webp" alt="sunset in vienna" />
        </div>
        <div className="divider">
          <img src="./assets/divider.webp" alt="" />
        </div>
        <div className="hello">
          <p>
            Hi, I'm Goran. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Magnam minima nihil libero ab, tenetur dolorem optio
            voluptates sed. Suscipit ipsa reiciendis eum nesciunt nihil
            consequatur esse quae explicabo cupiditate obcaecati?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            nulla vero itaque quasi blanditiis at expedita quod, aut provident
            omnis vel placeat commodi distinctio nostrum minima delectus
            corrupti debitis reiciendis!
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
                <img src="./assets/makarska.webp" alt="Makarska at night" />
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
                <img src="./assets/venice.webp" alt="Venice and gondola" />
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
                  src="./assets/seget-vranjica.webp"
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
          <img src="./assets/hero2.webp" alt="vienna from a hill" />
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
            ...lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            dicta hic maxime quo blanditiis, iste repudiandae? Adipisci numquam,
            placeat obcaecati quas aspernatur iure saepe voluptates nostrum!
            Officiis tempore impedit nobis!
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
