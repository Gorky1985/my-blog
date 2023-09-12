import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="max-width">
      <section className="intro-box">
        <div>
          <img
            src="./assets/me-about.webp"
            alt="author of this blog Goran Cosic sitting on a wall in Schönbrunn Park"
          />
        </div>
        <div className="divider">
          <img src="./assets/divider.webp" alt="" />
        </div>
      </section>
      <main id="content" className="about-area">
        <div className="title">
          <h1>About me</h1>
          <div className="sketch">
            <img src="./assets/sketch.webp" alt="" />
          </div>
          <p>
            <span className="hey">Hey, I'm Goran Cosic...</span>
            <br />
            ...lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            dicta hic maxime quo blanditiis, iste repudiandae? Adipisci numquam,
            placeat obcaecati quas aspernatur iure saepe voluptates nostrum!
            Officiis tempore impedit nobis! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ipsa quos perspiciatis fugiat culpa
            possimus natus minima, qui, illum aliquam delectus eos. Deleniti,
            distinctio assumenda dolores eaque consequuntur facere saepe
            quisquam? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Fugit ut neque modi numquam, corporis iusto nulla voluptate sequi
            vel tempora doloribus alias exercitationem labore dolorum aliquam,
            cumque libero, qui dignissimos.
          </p>
        </div>
        <Link to="/articles" className="more">
          <span>READ MORE ARTICLES</span>
          <span className="material-icons">description</span>
        </Link>
      </main>
      <footer className="footer-area about">
        <div className="divider-top about">
          <img src="./assets/divider.webp" alt="" />
        </div>
        <div className="footer">
          <p>&copy; 2023 Goran Cosic Photography</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
