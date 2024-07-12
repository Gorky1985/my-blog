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
            <br /> <br />
            ...as a dedicated father of two wonderful children and a loving
            husband, I've found that some of the most memorable moments in life
            are those spent exploring the world with my family. From the
            bustling streets of vibrant cities to the serene beauty of nature's
            wonders, we embark on adventures together, creating cherished
            memories that will last a lifetime. My passion for travel is not
            only fueled by the desire to discover new cultures and landscapes
            but also by the joy of witnessing the world through the eyes of my
            loved ones. With my trusty camera in hand, I capture every precious
            moment, freezing time to share our journey with others. <br />
            <br />
            When I'm not embarking on adventures with my family, you'll often
            find me immersed in the world of web development. Fuelled by a
            passion for technology and a desire to constantly learn and grow, I
            dedicate my free time to studying the intricacies of web
            development. From mastering the latest programming languages to
            experimenting with innovative design concepts, I thrive on the
            challenges that come with building and refining websites. Each
            project is an opportunity to flex my creative muscles and further
            expand my skills in this ever-evolving field. <br />
            <br />
            As a hobbyist web developer, I find immense satisfaction in creating
            websites that blend functionality with aesthetic appeal. Whether
            it's a personal blog to document our family travels or a platform to
            showcase my photography portfolio, each website serves as a canvas
            for me to express my creativity and share my passions with the
            world. While some may view web development as a mere pastime, for
            me, it's a journey of self-discovery and continuous improvement.
            Through every line of code and every pixel perfected, I strive to
            create digital experiences that resonate with others and leave a
            lasting impression.
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
          <p>
            <a
              className="footer-link social-icons"
              href="https://gorky1985.github.io/my-portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              Copyright &copy; 2024 Goran Cosic Photography
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
