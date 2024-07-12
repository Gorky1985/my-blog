import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import articles from "./article-content";
import { Link } from "react-router-dom";
import Sidebar from "../SideBar";
import Footer from "../Footer";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import useUser from "../hooks/useUser";
import NotFoundPage from "./NotFoundPage";

const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({
    upvotes: 0,
    comments: [],
    canUpvote: false,
  });
  const { canUpvote } = articleInfo;
  const { articleId } = useParams();

  const { user, isLoading } = useUser();

  useEffect(() => {
    const loadArticleInfo = async () => {
      const token = user && (await user.getIdToken());
      const headers = token ? { authtoken: token } : {};
      const response = await axios.get(`/api/articles/${articleId}`, {
        headers,
      });
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    };

    if (!isLoading) {
      loadArticleInfo();
    }
  }, [isLoading, user]);

  const article = articles.find((article) => article.name === articleId);

  const addUpvote = async () => {
    const token = user && (await user.getIdToken());
    const headers = token ? { authtoken: token } : {};
    const response = await axios.put(
      `/api/articles/${articleId}/upvote`,
      null,
      { headers }
    );
    const updatedArticle = response.data;
    setArticleInfo({ ...updatedArticle, canUpvote: false });
  };

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <>
      <div className="max-width">
        <div className="outer-wrap">
          <main id="content" className="main-area">
            <div className="title">
              <section className="intro-box">
                <div>
                  <img src={article.imgHeroOne} alt={article.imgHeroOneAlt} />
                </div>
                <div className="divider">
                  <img src="../assets/divider.webp" alt="" />
                </div>
              </section>
              <p className="title-margin">TRAVEL BLOG</p>
              <h1>{article.title}</h1>
              <div className="upvotes-section">
                {user ? (
                  <button className="btn" onClick={addUpvote}>
                    {canUpvote ? "Upvote" : "Already Upvoted"}
                  </button>
                ) : (
                  <button className="btn">Log in to upvote</button>
                )}
                <p id="upvote">
                  This article has {articleInfo.upvotes} upvote(s).
                </p>
              </div>
              <article>
                {article.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}

                <div>
                  <img src={article.imgHeroTwo} alt={article.imgHeroTwoAlt} />
                </div>
                <h2 className="title-mid">{article.titleMid}</h2>
                {article.contentTwo.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </article>
            </div>
            <Link to="/articles" className="more">
              <span>READ MORE ARTICLES</span>
              <span className="material-icons">description</span>
            </Link>
            {user ? (
              <AddCommentForm
                articleName={articleId}
                onArticleUpdated={(updatedArticle) =>
                  setArticleInfo({ ...updatedArticle, canUpvote: canUpvote })
                }
              />
            ) : (
              <button className="btn-comment">Log in to add a comment</button>
            )}
            <CommentsList comments={articleInfo.comments} />
          </main>
          <Sidebar src="../assets/me.webp" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ArticlePage;
