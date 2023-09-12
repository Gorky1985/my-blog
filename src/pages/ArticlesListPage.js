import articles from "./article-content";
import ArticlesList from "../components/ArticlesList";
import { Link } from "react-router-dom";
import Sidebar from "../SideBar";
import Footer from "../Footer";

const ArticlesListPage = () => {
  return (
    <>
      <div className="outer-wrap max-width">
        <main id="content" className="main-area">
          <div className="title">
            <p className="articles-margin">TRAVEL BLOG</p>
            <h1>ARTICLES</h1>
          </div>
          <ul className="cards">
            <ArticlesList articles={articles} />
          </ul>
        </main>
        <Sidebar src="./assets/me.webp" />
        <Footer />
      </div>
    </>
  );
};

export default ArticlesListPage;
