import { useEffect, useMemo, useState } from 'react';
import { ARTICLES, CATEGORIES } from '../data/articles';
import BlogCard from './BlogCard';
import SkeletonCard from './SkeletonCard';
import type { Article } from '../types/index';
import '../App.css';

const LatestSection = () => {
  const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState<string>('All');
  const [loading, setLoading] = useState<boolean>(true);
  const [articles, setArticles] = useState<Article[]>([]);
  const [showAll, setShowAll] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setArticles(ARTICLES);
      setLoading(false);
    }, 1200);
  }, []);

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchSearch =
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));

      const matchCategory = category === 'All' || a.category === category;

      return matchSearch && matchCategory;
    });
  }, [search, category, articles]);

  // Handle displayed articles based on showAll state
  const displayedArticles = showAll ? filtered : filtered.slice(0, 3);

  return (
    <section className='latest-section' id='latest'>
      <div className='section-inner'>
        <div className='latest-header'>
          <div>
            <h2 className='section-h2' style={{ marginTop: 8 }}>
              Latest at <em className='section-weight-700'>eGov</em>
            </h2>
          </div>
          <span className='results-count'>
            {loading ? 'Loading...' : `${filtered.length} results`}
          </span>
        </div>

        <div className='controls-row'>
          <div className='search-wrap'>
            <svg
              className='search-icon'
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2.2'
            >
              <circle cx='11' cy='11' r='7' />
              <path d='m21 21-4.35-4.35' />
            </svg>
            <input
              className='search-input'
              type='text'
              placeholder='Search articles…'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className='filter-tabs'>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`filter-tab${category === cat ? ' active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {loading ? (
          <div className='cards-grid'>
            {[...Array(6)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className='empty-state'>
            <span className='empty-icon'>🔍</span>

            <p className='empty-title'>No results found</p>

            <p className='empty-sub'>
              {search && (
                <>
                  No articles match "<strong>{search}</strong>"
                </>
              )}

              {search && category !== 'All' && ' in '}

              {category !== 'All' && (
                <>
                  <strong>{category}</strong>
                </>
              )}
            </p>

            <button
              className='btn-outline mt-4'
              onClick={() => {
                setSearch('');
                setCategory('All');
              }}
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            <div className='cards-grid'>
              {displayedArticles.map((a) => (
                <BlogCard key={a.id} article={a} />
              ))}
            </div>

            {!showAll && filtered.length > 3 && (
              <div className='latest-btn'>
                <button
                  onClick={() => setShowAll(true)}
                  className='btn-outline'
                  style={{ minWidth: '160px' }}
                >
                  See All
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default LatestSection;
