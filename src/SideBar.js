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
    </>
  );
};

export default Sidebar;
