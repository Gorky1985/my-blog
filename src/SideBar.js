import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <>
      <aside>
        <div className="goran-articles">
          <img src={props.src} alt="Goran Cosic, the author of this blog" />
        </div>
        <div className="arrow-box-articles">
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
    </>
  );
};

export default Sidebar;
