import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <li key={article.name} className="card-item double">
          <Link to={`/articles/${article.name}`}>
            <figure className="card">
              <img src={article.imgSrcSmall} alt=""></img>
              <figcaption className="caption">
                <h3 className="caption-title">{article.titleDesc}</h3>
                <p>{article.content[0].substring(0, 150)} ...</p>
              </figcaption>
            </figure>
          </Link>
        </li>
      ))}
    </>
  );
};

export default ArticlesList;
