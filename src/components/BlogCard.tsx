import type { Article } from '../types/index';

interface Props {
  article: Article;
}
import "../App.css"

const BlogCard = ({ article }: Props) => {
  return (
    <div className='blog-card'>
      <img src={article.image} alt={article.title} loading='lazy' />
      <div className='blog-card-body'>
        <p className='blog-cat'>{article.category}</p>
        <p className='blog-title'>{article.title}</p>
        <div className='blog-meta'>
          <span>📅 {article.date}</span>
          <br />
          {article.tags.map((tag) => (
            <span key={tag} className='blog-tag-chip'>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
